import { Box, Button, Stack } from "@mui/material";
import { useCountdown } from "./useCountdown";

export default function Advertaisment() {
    const [days, hours, minutes, seconds] = useCountdown("2025-09-25T23:59:59");
  
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
            <strong>{days}</strong>
            <i>days</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>{hours}</strong>
            <i>Hours</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>{minutes}</strong>
            <i>Minutes</i>
          </Stack>

          <Stack
            className="time-box"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <strong>{seconds}</strong>
            <i>Seconds</i>
          </Stack>
        </Stack>

        <Box className="buy-now-btn">Buy Now !</Box>

        <img className="img-box" src="/img/jbl-home.png" alt="jbl-home.png" />
      </Stack>
    </Stack>
  );
}
