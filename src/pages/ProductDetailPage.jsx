import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/atoms/Loader";
import { getProductById } from "../services/product";
import useSWR from "swr";
import { useQuery } from "react-query";

const ProductDetailPage = () => {
  const { id } = useParams(); // 이런 방식을 주로 사용.
  const parsedId = parseInt(id, 10); // 10진수로 변환.
  const dispatch = useDispatch();
  const { data: detail, error, isLoading } = useQuery(`product/${id}`, () => getProductById(id));

  //const { data, error, isLoading } = useSWR(`/product/${id}`, getProductById);

  // const id = useParams().id;

  /*
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);
*/

  // 여러 비동기를 받고 한번에 처리해야 한다면..
  // useQueries 로 복수의 비동기를 한번에 관리하자.

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {detail && <div>{detail.productName}</div>}
    </div>
  );
};

export default ProductDetailPage;
