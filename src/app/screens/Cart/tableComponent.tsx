import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartTable: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/productsImg/gamepad-2.png",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/productsImg/gamepad-2.png",
    },
  ]);

  const handleQuantityChange = (id: number, change: number) => {
    setProducts(
      (prev) =>
        prev
          .map((p) =>
            p.id === id
              ? { ...p, quantity: Math.max(0, p.quantity + change) }
              : p
          )
          .filter((p) => p.quantity > 0) // agar 0 bo‘lsa o‘chadi
    );
  };

  const handleRemove = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getSubtotal = (price: number, qty: number) => price * qty;

  return (
    <Box sx={{ width: "100%", height: "436px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "rgba(148, 167, 211, 0.080)",
              height: "100px",
            }}
          >
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              backgroundColor: " rgba(148, 190, 211, 0.089)",
              height: "300px",
            }}
          >
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{
                  "&:hover": {
                    backgroundColor: " rgba(91, 154, 185, 0.317)", // hover rang
                    cursor: "pointer", // optional
                  },
                }}
              >
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      position: "relative",
                      "&:hover .deleteBtn": { opacity: 1 }, // hover bo‘lganda delete chiqadi
                    }}
                  >
                    {/* Product Image */}
                    <Box
                      sx={{
                        width: 40,
                        height: 60,
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        borderRadius: 1,
                        position: "relative",
                      }}
                    >
                      <IconButton
                        className="deleteBtn"
                        color="error"
                        size="small"
                        onClick={() => handleRemove(product.id)}
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: -10,
                          bgcolor: "white",
                          opacity: 0,
                          transition: "opacity 0.3s",
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Typography>{product.name}</Typography>
                  </Box>
                </TableCell>

                <TableCell>${product.price}</TableCell>

                {/* Quantity with arrows */}
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #ccc",
                      borderRadius: 1,
                      width: "fit-content",
                      px: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(product.id, -1)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      sx={{ mx: 1, minWidth: 20, textAlign: "center" }}
                    >
                      {product.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleQuantityChange(product.id, 1)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </TableCell>

                <TableCell>
                  ${getSubtotal(product.price, product.quantity)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Button variant="outlined">Return To Shop</Button>
        <Button variant="outlined">Update Cart</Button>
      </Box>
    </Box>
  );
};

export default CartTable;
