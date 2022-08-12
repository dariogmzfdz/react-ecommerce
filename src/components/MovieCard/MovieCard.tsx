import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useWishList } from "../../context/WishListContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import "./MovieCard.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

type StoreItemProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  original_title: string;
  original_title_romanised: string;
};

export function StoreItem({
  id,
  title,
  price,
  image,
  original_title_romanised,
  original_title,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const { addToWishList, removeFromWish } = useWishList();
  const quantity = getItemQuantity(id);

  const oldPrice = price * 2;

  return (
    <>
      <div className="gllry-container">
        <div className="hero-container">
          <div className="main-container">
            <div className="poster-container">
              <a href="#">
                <img src={image} className="poster" />
              </a>
            </div>
            <div className="ticket-container">
              <div className="ticket__content">
                <h4 className="ticket__movie-title">{title}</h4>
                <p className="ticket__movie-slogan">
                  {original_title_romanised} <br /> ({original_title})
                </p>
                <div>
                  <button
                    className="add-wish-btn"
                    onClick={() => addToWishList(id)}
                  >
                    <FavoriteIcon style={{ fontSize: 35 }} />
                  </button>
                  <p className="ticket__current-price">
                    {formatCurrency(price)}
                  </p>
                  <p className="ticket__old-price">
                    {formatCurrency(oldPrice)}
                  </p>
                </div>
                <div>
                  {quantity === 0 ? (
                    <button
                      className="ticket__buy-btn"
                      onClick={() => increaseCartQuantity(id)}
                    >
                      + Add To Cart
                    </button>
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center mb-2"
                      style={{ gap: ".5rem" }}
                    >
                      <button
                        className="icon-btn add-btn"
                        onClick={() => decreaseCartQuantity(id)}
                      >
                        <RemoveIcon />
                      </button>
                      <div>
                        <span className="fs-5">{quantity}</span> in cart
                      </div>
                      <button
                        className="icon-btn add-btn"
                        onClick={() => increaseCartQuantity(id)}
                      >
                        <AddIcon />
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(id)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
