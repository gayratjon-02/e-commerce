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
  Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Close";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { retrievePausedOrders } from "./selector";
import { getImageUrl } from "../../../lib/config";
import { CartItem } from "../../../lib/types/search";
import { removeItemFromPausedOrders, clearPausedOrders } from "./slice";
import { useGlobals } from "../../hooks/useGlobals";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

const ITEMS_PER_PAGE = 5;

const CartTable: React.FC = () => {
  const dispatch = useDispatch();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  const { authMember } = useGlobals();

  // 🔑 userga bog'langan localStorage kalitlari
  const userKey = authMember?._id || "guest";
  const tombKey = `deletedPausedItemIds_${userKey}`;
  const clearedKey = `pausedCleared_${userKey}`;

  const saveTombstone = (id: string) => {
    const arr = JSON.parse(localStorage.getItem(tombKey) || "[]");
    if (!arr.includes(id)) {
      arr.push(id);
      localStorage.setItem(tombKey, JSON.stringify(arr));
    }
  };
  const markCleared = () => {
    localStorage.setItem(clearedKey, "1");
    localStorage.removeItem(tombKey);
  };

  // 🔹 Reduxdan kelgan barcha productlarni tayyorlaymiz
  const allProducts = React.useMemo<CartItem[]>(() => {
    return pausedOrders.flatMap((order: any) => {
      const { orderItems = [], productData = [] } = order;
      return orderItems.map((item: any) => {
        const product = productData.find((p: any) => p._id === item.productId);
        const imagePath =
          product?.productImages?.[0] ||
          product?.mainImagePath ||
          product?.imagePath ||
          "/productsImg/default.png";
        return {
          _id: item._id,
          name: product?.productName || "Unknown Product",
          price: item.itemPrice ?? product?.productPrice ?? 0,
          quantity: item.itemQuantity ?? 1,
          image: getImageUrl(imagePath),
        } as CartItem;
      });
    });
  }, [pausedOrders]);

  const [products, setProducts] = React.useState<CartItem[]>(allProducts);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => setProducts(allProducts), [allProducts]);

  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const handleChangePage = (_: any, value: number) => setPage(value);

  const productsToShow = products.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  /** 🔹 Productni o‘chirish (❌) — Redux + lokal jadval + tombstone */
  const handleDelete = (product: CartItem) => {
    dispatch(removeItemFromPausedOrders(product._id));
    setProducts((prev) => prev.filter((p) => p._id !== product._id));
    saveTombstone(product._id);
  };

  /** 🔹 Cartni tozalash — Redux + lokal jadval + cleared flag */
  const handleDeleteAll = () => {
    dispatch(clearPausedOrders());
    setProducts([]);
    markCleared();
  };

  const getSubtotal = (price: number, qty: number) => price * qty;
  const totalPrice = products.reduce(
    (acc, p) => acc + getSubtotal(p.price, p.quantity),
    0
  );

  return (
    <Box sx={{ width: "100%", minHeight: "500px" }}>
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
        <Table>
          <TableHead
            sx={{
              backgroundColor: "rgba(148, 167, 211, 0.12)",
              height: "80px",
            }}
          >
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Subtotal</TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ backgroundColor: "rgba(148, 190, 211, 0.05)" }}>
            {productsToShow.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography color="text.secondary">
                    No items in your cart.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              productsToShow.map((product) => (
                <TableRow
                  key={product._id}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(91, 154, 185, 0.12)",
                      transition: "0.3s",
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
                        "&:hover .deleteBtn": { opacity: 1 },
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 80,
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
                          onClick={() => handleDelete(product)}
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
                      <Typography fontWeight={500}>{product.name}</Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    ${Number(product.price || 0).toFixed(2)}
                  </TableCell>

                  {/* Quantity faqat ko‘rinadi */}
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
                      <Typography
                        sx={{ mx: 1, minWidth: 20, textAlign: "center" }}
                      >
                        {product.quantity}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>
                    $
                    {getSubtotal(product.price || 0, product.quantity).toFixed(
                      2
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" mt={3}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            color="primary"
            shape="rounded"
          />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 3,
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Button variant="outlined" sx={{ mr: 2 }} onClick={handleDeleteAll}>
            Clear Cart
          </Button>
          <Button variant="contained" color="primary">
            Update Cart
          </Button>
        </Box>

        <Typography
          variant="h6"
          sx={{
            mt: { xs: 2, md: 0 },
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Total: ${Number(totalPrice || 0).toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CartTable;
