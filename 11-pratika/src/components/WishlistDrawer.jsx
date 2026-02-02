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
  import { useWishlistStore } from "../store/wishlist";
  
  const WishlistDrawer = ({ open, onClose }) => {
    const { items, toggleWishlist } = useWishlistStore();
  
    return (
      <Drawer anchor="right" open={open} onClose={onClose}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Wishlist</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {items.length === 0 ? (
            <Typography sx={{ mt: 2 }}>No products in wishlist</Typography>
          ) : (
            <List>
              {items.map((product) => (
                <ListItem
                  key={product.id}
                  secondaryAction={
                    <IconButton onClick={() => toggleWishlist(product)} edge="end">
                      <CloseIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={product.title}
                    secondary={`$${product.price}`}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    );
  };
  
  export default WishlistDrawer;
  