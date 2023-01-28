import "./navigationbar.css";
import Icon from "@mui/material/Icon";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    id: 1,
    title: "Home",
    icon: "home",
    href: "/",
  },
  {
    id: 2,
    title: "Messages",
    icon: "message_outlined",
    href: "/messages",
  },
];

function NavigationItem({ icon, title, href }) {
  return (
    <NavLink className="Navigation-item-container" to={href}>
      <div className="Navigation-icon-container">
        <Icon fontSize="inherit" className="Navigation-item-icon">
          {icon}
        </Icon>
      </div>
      <p className="Navigation-item-label">{title}</p>
    </NavLink>
  );
}

export default function NavigationBar() {
  return (
    <div className="Navigation-container">
      <h1 className="title">Furstagram</h1>
      {navItems.map((navItem) => (
        <NavigationItem
          key={navItem.id}
          icon={navItem.icon}
          title={navItem.title}
          href={navItem.href}
        />
      ))}
    </div>
  );
}
