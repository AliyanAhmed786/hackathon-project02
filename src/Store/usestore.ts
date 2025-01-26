import { create } from "zustand";
import { persist } from "zustand/middleware";

// Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stockLevel: number;
  category: string;
  isFeaturedProduct: boolean;
}

// Cart item type (extends Product with quantity)
interface CartItem extends Product {
  quantity: number;
}

// Store state interface
interface StoreState {
  products: Product[]; // All products in the store
  cartItems: CartItem[]; // Cart items
  wishlistItems: Product[]; // Full product objects in the wishlist
  addProducts: (productList: Product[]) => void; // Add all products
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  getProductById: (productId: string) => Product | undefined; // Get single product details
  getWishlistProducts: () => Product[]; // Get products in the wishlist
}

// Zustand store creation with persist middleware
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: [], // Initialize with an empty product list
      cartItems: [],
      wishlistItems: [],

      // Add products to the store
      addProducts: (productList) => set({ products: productList }),

      // Add product to cart
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item._id === product._id);
          if (existingItem) {
            // Update quantity if product exists in cart
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          } else {
            // Add new product to the cart with default quantity 1
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }
        }),

      // Remove product from cart
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item._id !== productId),
        })),

        clearCart: () =>
          set(() => ({
            cartItems: [],
          })),

      // Update product quantity in cart
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item._id === productId ? { ...item, quantity } : item
          ),
        })),

      // Add product to wishlist
      addToWishlist: (product) =>
        set((state) => {
          if (!state.wishlistItems.some((item) => item._id === product._id)) {
            const updatedWishlist = [...state.wishlistItems, product];
            console.log("Wishlist Updated:", updatedWishlist); // Debug log
            return { wishlistItems: updatedWishlist };
          }
          return state; // Avoid duplicates
        }),

      // Remove product from wishlist
      removeFromWishlist: (productId) =>
        set((state) => {
          const updatedWishlist = state.wishlistItems.filter((item) => item._id !== productId);
          console.log("Wishlist Updated after removal:", updatedWishlist); // Debug log
          return { wishlistItems: updatedWishlist };
        }),

      // Get product details by ID
      getProductById: (productId) => get().products.find((product) => product._id === productId),

      // Get products in the wishlist
      getWishlistProducts: () => get().wishlistItems,
    }),
    {
      name: "e-commerce-storage", // Local storage key
      storage: {
        getItem: (name) => {
          const item = window.localStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) => {
          window.localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          window.localStorage.removeItem(name);
        },
      },
    }
  )
);
