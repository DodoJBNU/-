import { useDispatch, useSelector } from "react-redux";
import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect } from "react";
import { getProducts } from "../../store/slices/productSlice";

const MainProductTemplate = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(getProducts(0));
  }, []);
  return (
    <Container>
      <ProductGrid products={products} />
    </Container>
  );
};

export default MainProductTemplate;
