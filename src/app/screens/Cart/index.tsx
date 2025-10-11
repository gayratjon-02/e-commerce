import { Breadcrumbs, Button, Container, Stack, Table } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartTable from "./tableComponent";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import "../../../css/cart.css";
import { Order } from "../../../lib/types/order";

/**  REDUX SLICE DISPATCH **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Cart() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  return (
    <Container className="cart-container">
      <Stack className="cart-main">
        <Stack className="cart-top">
          <div
            role="presentation"
            onClick={handleClick}
            className="product-table"
          >
            <Breadcrumbs aria-label="breadcrumb">
              <NavLink to={"/"} color="inherit" href="/">
                Home
              </NavLink>

              <NavLink
                to={"/cart"}
                color="text.primary"
                href="/contact"
                aria-current="page"
              >
                Cart
              </NavLink>
            </Breadcrumbs>
          </div>
        </Stack>

        <Stack className="cart-wrapper">
          <CartTable />

          <Stack
            className="coupon-total"
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Stack className="cart-coupon">
              <Stack className="coupon-code" flexDirection={"row"}>
                <input type="text" placeholder="Coupon Code" />
                <Button className="coupon-btn">Apply Coupon</Button>
              </Stack>
            </Stack>
            <Stack className="cart-total">
              <p>Cart Total</p>

              <Stack
                className="cart-detail"
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <span>Subtotal</span>
                <strong>$1750</strong>
              </Stack>

              <Stack
                className="cart-detail"
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <span>Shopping</span>
                <strong>Free</strong>
              </Stack>

              <Stack
                className="cart-detail"
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <span>Total</span>
                <strong>$1750</strong>
              </Stack>

              <Stack
                width={"100"}
                mt={"20px"}
                justifyContent={"center"}
                alignItems={"center"}
                className="card-butt"
              >
                <Button className="card-butt2">Process to checkout</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
