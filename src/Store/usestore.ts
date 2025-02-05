// store.ts
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

// Profile type
interface UserProfile {
  dob: string | number | readonly string[] | undefined;
  password: string | number | readonly string[] | undefined;
  gender: string | readonly string[];
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  city: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo: string;
}

// Store state interface
interface StoreState {
  products: Product[];
  cartItems: CartItem[];
  wishlistItems: Product[];
  profile: UserProfile;
  isLoggedIn: boolean;
  addProducts: (productList: Product[]) => void;
  addToCart: (product: Product) => void;
  clearCart: () => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  getProductById: (productId: string) => Product | undefined;
  getWishlistProducts: () => Product[];
  setProfile: (profileData: UserProfile) => void;
  login: () => void;
  logout: () => void;
}

// Zustand store creation with persist middleware
export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: [],
      cartItems: [],
      wishlistItems: [],
      profile: {
        firstName: "",
        lastName: "",
        country: "Pakistan",
        street: "",
        city: "",
        zip: "",
        phone: "",
        email: "",
        additionalInfo: "",
        dob: "",
        password: "",
        gender: "",
      },
      isLoggedIn: false, // Login state

      addProducts: (productList) => set({ products: productList }),

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item._id === product._id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            };
          }
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item._id !== productId),
        })),

      clearCart: () =>
        set(() => ({
          cartItems: [],
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item._id === productId ? { ...item, quantity } : item
          ),
        })),

      addToWishlist: (product) =>
        set((state) => {
          if (!state.wishlistItems.some((item) => item._id === product._id)) {
            return { wishlistItems: [...state.wishlistItems, product] };
          }
          return state;
        }),

      removeFromWishlist: (productId) =>
        set((state) => ({
          wishlistItems: state.wishlistItems.filter((item) => item._id !== productId),
        })),

      getProductById: (productId) => get().products.find((product) => product._id === productId),

      getWishlistProducts: () => get().wishlistItems,

      setProfile: (profileData) => set({ profile: profileData }),

      // Login and logout methods
      login: () => set({ isLoggedIn: true }),

      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: "e-commerce-storage", 
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
