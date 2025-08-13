import {
  Box,
  Button,
  Container,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { FormControl } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function HomeNavbar() {
  const authMember = null;
  const [language, setLanguage] = useState("en");

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
          <Stack className="text-btn" flexDirection={'row'} >
            <Box className="nav-text">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!</Box>
            <Box>
              <Link className="showNow-btn">ShopNow</Link>
            </Box>
          </Stack>
          <Box className="lang-change">
            <FormControl className="ll" fullWidth  variant="standard">
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
      </Container>
    </div>
  );
}
