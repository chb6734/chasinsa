import {
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getProducts as fetchProducts } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], fetchProducts, {
    staleTime: 1000 * 60,
  });
  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    { onSuccess: () => QueryClient.invalidateQueries(["products"]) }
  );

  return { productsQuery, addProduct };
}
