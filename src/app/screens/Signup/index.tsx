import { Button, Container, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import "../../../css/signup.css";
import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <Container className="signup-container">
      <Stack className="signup-main" flexDirection={"row"}>
        <Stack className="signup-left">
          <img src="/img/phone-sign.png" alt="" />
        </Stack>
        <Stack className="signup-right">
          <h1>Create an account</h1>
          <p>Enter your details below</p>

          <form action="#">
            <input type="text" placeholder="Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or Phone Number"
            />
            <input type="password" placeholder="Password" />

            <Button className="signup-butt">Create Account</Button>
            <Button className="signup-butt2">
              <img src="/icons/Icon-Google.png" alt="" />
              <NavLink to={"#"}>Sign up with Google</NavLink>
            </Button>

            <Stack
              className="have-account"
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <p>Already have account?</p>
              <NavLink to={"/login"} className={"login-link"}>Log in</NavLink>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Container>
  );
}
