import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import type { OrderRequest } from "../types";

export function useCreateOrder() {
  return useMutation({
    mutationFn: (order: OrderRequest) =>
      apiClient("/order", {
        method: "POST",
        body: JSON.stringify(order),
      }),
  });
}
