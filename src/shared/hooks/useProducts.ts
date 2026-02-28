import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import type { Product } from "../types";

export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => apiClient<Product[]>("/product"),
  });
}

export function useProductById(id: string) {
  return useQuery<Product>({
    queryKey: ["products", id],
    queryFn: () => apiClient<Product>(`/product/${id}`),
    enabled: !!id,
  });
}
