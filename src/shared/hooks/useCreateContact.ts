import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../api/client";
import type { ContactRequest } from "../types";

export function useCreateContact() {
  return useMutation({
    mutationFn: (contact: ContactRequest) =>
      apiClient("/contact", {
        method: "POST",
        body: JSON.stringify(contact),
      }),
  });
}
