import React, {
  useEffect,
  useState,
  useRef,
  Suspense,
  useContext,
} from "react";
import { Icon, Skeleton } from "@mui/material";
import generateDogInfo from "../../utils/helpers/generateDogInfo";
import "./dogfeed.css";
import { FilterContext } from "../../context";
import { useQuery } from "react-query";
import axios from "axios";

const Post = React.lazy(() => import("../../components/Post"));

export default function DogFeed() {
  const listRef = useRef();
  const [dogPosts, setDogPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const { filters } = useContext(FilterContext);

  const fetchDogs = async () => {
    const filterIndex = Math.floor(Math.random() * filters.length);

    const apiCall =
      filters.length === 0
        ? "https://dog.ceo/api/breeds/image/random/4"
        : `https://dog.ceo/api/breed/${filters[filterIndex]}/images/random/4`;

    return axios.get(apiCall).then((res) => {
      if (res?.data?.status === "success") {
        res.data.message.forEach((url) => {
          setDogPosts((prev) => [...prev, generateDogInfo(url)]);
        });
      }
    });
  };

  const { refetch } = useQuery({
    queryKey: ["dogImages", filters],
    queryFn: () => fetchDogs(),

    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (filters) {
      setDogPosts([]);
    }
  }, [filters]);

  function onScroll() {
    if (listRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight && loadingPosts === false) {
        setLoadingPosts(true);
        refetch().then(() => setLoadingPosts(false));
      }
    }
  }

  return (
    <div className="App-feed" ref={listRef} onScroll={onScroll}>
      {dogPosts.map((dogPost, index) => (
        <Suspense key={index} fallback={<Skeleton width={400} height={600} />}>
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
