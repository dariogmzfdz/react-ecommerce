import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { useWishList } from "../../context/WishListContext";
import storeItems from "../../data/db.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function WishItems({ id, quantity }: CartItemProps) {
  const { removeFromWish } = useWishList();

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
        <div>{item.title} </div>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromWish(id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
