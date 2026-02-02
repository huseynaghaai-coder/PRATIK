import { API_URL } from "../constant/api";

export const fetchProducts = async () => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
