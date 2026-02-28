export interface Product {
  id: string;
  name_uz: string;
  name_en?: string;
  name_ru?: string;
  description_uz: string;
  description_en?: string;
  description_ru?: string;
  price: number;
  images: string[];
  image?: string;
  category?: string;
  inStock?: boolean;
  createdAt?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
}

export interface OrderRequest {
  fullName: string;
  phone: string;
  address: string;
  email?: string;
  oferta: boolean;
  items: OrderItem[];
}

export interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
