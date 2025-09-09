import { Box, Button, Stack } from "@mui/material";

export default function Advertaisment() {
  return (
    <Stack className="advertaisment-main">
      <Stack className="advertaisment-wrapper">
        <span>Categories</span>
        <p>Enhance Your Music Experience</p>

        <Stack
          className="adv-time"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>23</strong>
            <i>days</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>05</strong>
            <i>Hours</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>59</strong>
            <i>Minutes</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>35</strong>
            <i>Seconds</i>
          </Stack>
        </Stack>

        <Box className="buy-now-btn">Buy Now !</Box>

        <img className="img-box" src="/img/jbl-home.png" alt="jbl-home.png" />
      </Stack>
    </Stack>
  );
}
