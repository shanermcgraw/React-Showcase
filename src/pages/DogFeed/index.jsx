import React, { useEffect, useState, useRef, Suspense } from "react";
import { Icon, Skeleton } from "@mui/material";
import generateDogName from "../../utils/helpers/generateDogName";
import "./dogfeed.css";

const Post = React.lazy(() => import("../../components/Post"));

export default function DogFeed() {
  const [dogPosts, setDogPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const listRef = useRef();

  const loadDogImages = async () => {
    const dogs = await fetch("https://dog.ceo/api/breeds/image/random/4").then(
      (res) => res.json()
    );

    dogs.message.forEach((url) => {
      setDogPosts((prevPosts) => [
        ...prevPosts,
        {
          url,
          name: generateDogName(),
          description: "woof woof",
          likes: Math.floor(Math.random() * 100),
          date: "4 min",
        },
      ]);
    });

    setLoadingPosts(false);
  };

  useEffect(() => {
    loadDogImages();
  }, []);

  function onScroll() {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight === scrollHeight && loadingPosts === false) {
        setLoadingPosts(true);
        loadDogImages();
      }
    }
  }

  return (
    <div className="App-feed" ref={listRef} onScroll={onScroll}>
      {dogPosts.map((dogPost) => (
        <Suspense fallback={<Skeleton width={400} height={600} />}>
          <Post dogPost={dogPost} />
        </Suspense>
      ))}
      {loadingPosts && (
        <div className="Dogfeed-loadmore-container">
          <Icon className="Dogfeed-loading-icon">sync</Icon>
        </div>
      )}
    </div>
  );
}
