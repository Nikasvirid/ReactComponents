import { data } from "./data";

function CardList() {
  const product = data;
  return (
    <div className="product">
      {product.map((element) => {
        const { id, name, image, price } = element;
        return (
          <div className="product-card" key={id}>
            <img src={image} alt="fotocard" width="400px" height="500px" />
            <p>{name}</p>
            <p>{price}$</p>
          </div>
        );
      })}
    </div>
  );
}
export default CardList;
