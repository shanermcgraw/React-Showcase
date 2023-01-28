import moment from "moment";
import generateDogName from "./generateDogName";

export default function getDogInfo(url) {
  return {
    url,
    name: generateDogName(),
    description: "woof woof",
    likes: Math.floor(Math.random() * 100),
    date: moment().startOf('day').fromNow(),
  };
}
