import { Button, Container, Stack } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import "../../../css/login.css";
import { NavLink, useHistory } from "react-router-dom";
import { T } from "../../../lib/types/common";
import { useState } from "react";
import { LoginInput } from "../../../lib/types/member";
import { Messages } from "../../../lib/config";
import MemberService from "../../services/MemberService";
import {
  sweetErrorHandling,
  sweetTopSuccessAlert,
} from "../../../lib/sweetAlert";

export default function Signup() {
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");

  const history = useHistory();

  /** HANDLERS **/

  const handleNick = (e: T) => {
    setMemberNick(e.target.value);
  };
  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handleLoginRequest = async () => {
    try {
      const isFullFill = memberNick !== "" && memberPassword !== "";

      if (!isFullFill) throw new Error(Messages.error3);
      const loginInputs: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const memberService = new MemberService();
      const result = await memberService.login(loginInputs);

      (document.querySelector("form") as HTMLFormElement).reset();
      sweetTopSuccessAlert("Login successfully");

      history.push("/");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter") {
      handleLoginRequest().then();
    }
  };

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
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email or Phone Number"
              onChange={handleNick}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePassword}
              onKeyDown={handlePasswordKeyDown}
            />

            <Button className="signup-butt" onClick={handleLoginRequest}>
              Login
            </Button>
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
              <span>Forget Password</span>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Container>
  );
}
