import { Icon } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import Post from "../../components/Post";
import generateDogName from "../../utils/helpers/generateDogName";
import "./dogfeed.css";

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
        <Post dogPost={dogPost} />
      ))}
      {loadingPosts && <Icon>sync</Icon>}
    </div>
  );
}
