import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import Divider from "../../components/divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CategoryMain() {
  return (
    <div className="category-main">
      {/* <Divider width="2" height="1" bg="#d9d9d9" /> */}
      <Container className="category-container">
        <Stack
          className="category-left"
          width={"233px"}
          height={"384px"}
          flexDirection={"row"}
        >
          <Stack className="left-catt" flexDirection={"column"}>
            <Stack className="catt-text-wrapper" flexDirection={"row"}>
              <Box className="catt-text">Woman's Fashion</Box>
              <img
                src="./icons/DropDownRight.png"
                alt=""
                width={"24px"}
                height={"24px"}
              />
            </Stack>

            <Stack className="catt-text-wrapper" flexDirection={"row"}>
              <Box className="catt-text">Men’s Fashion</Box>
              <img
                src="./icons/DropDownRight.png"
                alt=""
                width={"24px"}
                height={"24px"}
              />
            </Stack>

            <Box className="catt-text">Electronics</Box>
            <Box className="catt-text">Home & Lifestyle</Box>
            <Box className="catt-text">Medicine</Box>
            <Box className="catt-text">Sports & Outdoor</Box>
            <Box className="catt-text">Baby’s & Toys</Box>
            <Box className="catt-text">Groceries & Pets</Box>
            <Box className="catt-text">Health & Beauty</Box>
          </Stack>

          <Stack className="line-catt">
            <Divider height="384" w1="10" width="1" bg="#d9d9d9" />
          </Stack>
        </Stack>

        <Box className="category-right"></Box>
      </Container>
    </div>
  );
}
