import "./HeaderMenu.css";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={
          <ChevronDownIcon
            className={`menu-icon ${isOpen ? "icon-rotate" : ""}`}
            onClick={() => setIsOpen((prevState) => !prevState)}
          />
        }
        style={{ color: "rgb(105 105 105)" }}
        className="menu-trigger"
      ></MenuButton>
      <MenuList>
        <Link className="link" to="/">
          <MenuItem
            className="menu-btn"
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          >
            Main
          </MenuItem>
        </Link>
        <Link to="/agents">
          <MenuItem className="menu-btn">Agents</MenuItem>
        </Link>
        <Link to="/maps">
          <MenuItem className="menu-btn">Maps</MenuItem>
        </Link>
        <Link className="link" to="/weapons">
          <MenuItem className="menu-btn">Weapons</MenuItem>
        </Link>
        <Link className="link" to="/levelBorders">
          <MenuItem
            className="menu-btn"
            style={{
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
            }}
          >
            Level Borders
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default HeaderMenu;
