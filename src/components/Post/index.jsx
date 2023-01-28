import {
  Favorite,
  FavoriteBorder,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import "./post.css";

export default function Post({ dogPost }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="Post-container">
      <div className="Post-header-container">
        <p>
          <b>{dogPost.name}</b>
          &nbsp;• {dogPost.date}
        </p>
      </div>
      <div className="Post-image-container">
        <img src={dogPost.url} className="Post-image" />
      </div>
      <div className="Post-icons-container">
        <div
          onClick={() => setLiked((prev) => !prev)}
          className="Post-icon-container"
        >
          {liked ? <Favorite htmlColor="red" /> : <FavoriteBorder />}
        </div>
        <div className="Post-icon-container">
          <ModeCommentOutlined />
        </div>
      </div>
      <div className="Post-details-container">
        <p>
          <b>{dogPost.likes + (liked ? 1 : 0)} likes</b>
        </p>
        <p>
          <b>{dogPost.name}&nbsp;</b>
          {dogPost.description}
        </p>
      </div>
    </div>
  );
}
