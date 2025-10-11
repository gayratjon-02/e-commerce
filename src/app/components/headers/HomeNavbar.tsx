import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import UserMenu from "./avatar";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals"; // ✅ qo‘shildi

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;

  // ✅ Context orqali global foydalanuvchi holati
  const { authMember } = useGlobals();

  const [language, setLanguage] = useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        {/* 🔹 Yuqori promo banner */}
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
              <NavLink to={"/products"} className="showNow-btn">
                ShopNow
              </NavLink>
            </Box>
          </Stack>

          {/* 🔹 Language selector */}
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

        {/* 🔹 Pastki navbar */}
        <Stack className="navbar-bott-wrapper">
          <Box className="nav-logo">
            <img src="/icons/Exclusive-logo.svg" alt="logo" />
          </Box>

          {/* 🔹 Navigatsiya linklari */}
          <Stack className="nav-links" flexDirection={"row"}>
            <NavLink exact to="/" activeClassName="underline">
              Home
            </NavLink>
            <NavLink to={"/products"} activeClassName="underline">
              Products
            </NavLink>
            <NavLink to={"/login"} activeClassName="underline">
              Login
            </NavLink>

            {/* 🔹 Login bo‘lgan foydalanuvchi uchun “Orders”, bo‘lmasa “Sign Up” */}
            {authMember ? (
              <NavLink to={"/cart"} activeClassName="underline">
                Orders
              </NavLink>
            ) : (
              <NavLink to={"/signup"} activeClassName="underline">
                Sign Up
              </NavLink>
            )}
          </Stack>

          {/* 🔹 Qidiruv maydoni */}
          <Box className="nav-search">
            <input type="text" placeholder="What are you looking for?" />
            <SearchIcon />
          </Box>

          {/* 🔹 Ikkonlar (like, basket, user menu) */}
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

            {/* 🔹 Agar user login bo‘lgan bo‘lsa, avatar menyu chiqadi */}
            {authMember && (
              <Box className="hover-line">
                <UserMenu />
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
