import "./navigationfooter.css";
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
    <NavLink className="Navigation-footer-item-container" to={href}>
      <div className="Navigation-footer-icon-container">
        <Icon fontSize="inherit" className="Navigation-footer-item-icon">
          {icon}
        </Icon>
      </div>
    </NavLink>
  );
}

export default function NavigationFooter() {
  return (
    <div className="Navigation-footer-container">
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
