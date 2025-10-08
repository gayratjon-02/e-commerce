import {
  Badge,
  Box,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserMenu from "./avatar";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const authMember = true;
  const [language, setLanguage] = useState("en");
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack
          className="navbar-wrapper"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack className="text-btn" flexDirection={"row"}>
            <Box className="nav-text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </Box>
            <Box>
              <NavLink to={"/"} className="showNow-btn">
                ShopNow
              </NavLink>
            </Box>
          </Stack>
          <Box className="lang-change">
            <FormControl className="ll" fullWidth variant="standard">
              <Select
                id="language-select"
                value={language}
                onChange={handleChange}
              >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="uz">Uzbek</MenuItem>
                <MenuItem value="ru">Russian</MenuItem>
                <MenuItem value="ko">Korean</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack className="navbar-bott-wrapper">
          <Box className="nav-logo">
            <img src="/icons/Exclusive-logo.svg" alt="logo" />
          </Box>
          <Stack className="nav-links" flexDirection={"row"}>
            <NavLink exact to="/" activeClassName="underline">
              Home
            </NavLink>
            <NavLink to={"/products"} activeClassName="underline">
              Products
            </NavLink>
            <NavLink to={"/about"} activeClassName="underline">
              About
            </NavLink>
            <NavLink to={"/signup"} activeClassName="underline">
              Sign Up
            </NavLink>
          </Stack>

          <Box className="nav-search">
            <input type="text" placeholder="What are you looking for?" />
            <SearchIcon />
          </Box>

          <Stack
            className="nav-dashboard"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box className="hover-line">
              <FavoriteBorderIcon className="nav-like" />
            </Box>

            <Box className="hover-line">
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <UserMenu />
              </Box>
            ) : null}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
