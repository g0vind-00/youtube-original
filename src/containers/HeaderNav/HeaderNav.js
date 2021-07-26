import React from "react";
import { Image, Menu } from "semantic-ui-react";
import "./HeaderNav.scss";
import logo from "../../assets/images/logo.jpg";

function HeaderNav() {
  return (
    <div>
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">{/* TODO */}</Menu.Menu>
      </Menu>
    </div>
  );
}

export default HeaderNav;
