import storeItems from "../../data/db.json";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CheckoutItem({ id, quantity }: CartItemProps) {
  const item = storeItems.find((i) => i.id === id);
  console.log(item);

  if (item == null) return null;

  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 className="my-0">{item.title}</h6>
        <small className="text-muted">{quantity}</small>
      </div>
      <span className="text-muted">
        {formatCurrency(item.price * quantity)}
      </span>
    </li>
  );
}
