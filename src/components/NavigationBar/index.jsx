import "./navigationbar.css";
import Icon from "@mui/material/Icon";

function NavigationItem({ icon, title }) {
  return (
    <div className="Navigation-item-container">
      <div className="Navigation-icon-container">
        <Icon fontSize="inherit" className="Navigation-item-icon">
          {icon}
        </Icon>
      </div>
      <p className="Navigation-item-label">{title}</p>
    </div>
  );
}

export default function NavigationBar() {
  return (
    <div className="Navigation-container">
      <h1 className="title">Furstagram</h1>
      <NavigationItem icon="home" title="Home" />
      <NavigationItem icon="message_outlined" title="Messages" />
    </div>
  );
}
