import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Home from "./pages/Home";
import WishlistDrawer from "./components/WishlistDrawer";
import CartDrawer from "./components/CartDrawer";
import { useWishlistStore } from "./store/wishlist";
import { useCartStore } from "./store/cart";

function App() {
  const [openWishlist, setOpenWishlist] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const { items: wishlistItems } = useWishlistStore();
  const { items: cartItems } = useCartStore();

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Product Store
          </Typography>
          {/* Ürək ikonu */}
          <IconButton color="inherit" onClick={() => setOpenWishlist(true)}>
            <Badge badgeContent={wishlistItems.length} color="error">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          {/* Səbət ikonu */}
          <IconButton color="inherit" onClick={() => setOpenCart(true)}>
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Home />
      <WishlistDrawer open={openWishlist} onClose={() => setOpenWishlist(false)} />
      <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
    </>
  );
}

export default App;
