import {
    Drawer,
    IconButton,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { useCartStore } from "../store/cart";
  
  const CartDrawer = ({ open, onClose }) => {
    const { items, removeFromCart } = useCartStore();
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Cart</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {items.length === 0 ? (
            <Typography sx={{ mt: 2 }}>No products in cart</Typography>
          ) : (
            <List>
              {items.map((product) => (
                <ListItem
                  key={product.id}
                  secondaryAction={
                    <IconButton onClick={() => removeFromCart(product.id)} edge="end">
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${product.title} (x${product.quantity})`}
                    secondary={`$${product.price * product.quantity}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    );
  };
  
  export default CartDrawer;
  