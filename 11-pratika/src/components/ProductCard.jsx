import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    Box,
    Button,
  } from "@mui/material";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
  import { useWishlistStore } from "../store/wishlist";
  import { useCartStore } from "../store/cart";
  
  const ProductCard = ({ product }) => {
    const { toggleWishlist, isInWishlist } = useWishlistStore();
    const { addToCart } = useCartStore();
  
    const inWishlist = isInWishlist(product.id);
  
    return (
      <Card sx={{ maxWidth: 300, margin: 2, position: "relative" }}>
        {/* Ürək ikonu yuxarı sağda */}
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton
            onClick={() => toggleWishlist(product)}
            color="error"
            size="small"
            sx={{ backgroundColor: "white", boxShadow: 1 }}
          >
            {inWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
  
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
  
          {/* Add to Cart düyməsi */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    );
  };
  
  export default ProductCard;
  