export interface User {
  id: string;
  email: string;
  name: string;
  profilePhoto?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  preparationTime: string;
  ingredients: string[];
  calories?: number;
  createdAt: string;
}

export interface CartItem {
  id: string;
  foodItem: FoodItem;
  quantity: number;
  totalPrice: number;
}

export interface WishlistItem {
  id: string;
  foodItem: FoodItem;
  addedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  deliveryAddress: string;
  orderDate: string;
  estimatedDelivery: string;
  paymentMethod: 'cod' | 'online';
  customerName: string;
  customerPhone: string;
}

export interface AppState {
  user: User | null;
  cart: CartItem[];
  wishlist: WishlistItem[];
  orders: Order[];
  theme: 'light' | 'dark';
  isLoading: boolean;
}