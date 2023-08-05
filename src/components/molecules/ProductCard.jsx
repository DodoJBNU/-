import { comma } from "../../utils/convert";
import Card from "../atoms/Card";
import Photo from "../atoms/Photo";
import * as S from "../../styles/molecules/ProductCard";

const ProductCard = ({ product, className }) => {
  return (
    <Card to={`product/${product.id}`} className={`Card ${className}`}>
      <div>
        <Photo className={`photo ${className}`} src={product.image} alt={product.productName} />
      </div>
      <S.freeDelivery className="free-delivery" alt="무료배송">
        무료배송
      </S.freeDelivery>
      <div>
        <div className="product-name">{product.productName}</div>
        <S.Div>
          <S.Span className="talk-cost">톡딜가</S.Span>
          <S.Span className="product-price"> {comma(product.price)}원 부터~</S.Span>
        </S.Div>
      </div>
    </Card>
  );
};

export default ProductCard;
