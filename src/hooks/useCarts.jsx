import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../context/AuthContext";
import { addUpdateToCart, getCart, removeFromCart } from "../api/firebase";

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery(["carts", uid || ""], () => getCart(uid), {
    enabled: !!uid,
  });

  const addUpdateItem = useMutation(
    (product) => addUpdateToCart(uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", uid]);
      },
    }
  );

  const removeItem = useMutation((id) => removeFromCart(uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", uid]);
    },
  });

  return { cartQuery, addUpdateItem, removeItem };
}
