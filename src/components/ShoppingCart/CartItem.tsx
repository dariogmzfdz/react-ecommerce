import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/db.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  console.log(item);

  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.image}
        style={{ width: "125px", height: "100%", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <button
        className="icon-btn add-btn"
        onClick={() => decreaseCartQuantity(id)}
      >
        -
      </button>
      <button
        className="icon-btn add-btn"
        onClick={() => increaseCartQuantity(id)}
      >
        +
      </button>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
