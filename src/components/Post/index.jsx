import {
  Favorite,
  FavoriteBorder,
  ModeCommentOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import "./post.css";

export default function Post() {
  const [liked, setLiked] = useState(false);

  const likeCount = 12;

  return (
    <div className="Post-container">
      <div className="Post-header-container">
        <p>
          <b>Paws MacGruffin</b>
          &nbsp;• 1h
        </p>
      </div>
      <div className="Post-image-container">
        <img src="https://images.dog.ceo/breeds/germanshepherd/n02106662_597.jpg" />
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
          <b>{likeCount + (liked ? 1 : 0)} likes</b>
        </p>
        <p>
          <b>Paws MacGuffin&nbsp;</b>
          This is a test description
        </p>
      </div>
    </div>
  );
}
