import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import "./ShoppingCart.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../../data/db.json";
import EmptyCart from "../../assets/emptyCart.png";
import { Button } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();
  return (
    <Modal show={isOpen} onHide={closeCart} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          maxHeight: "calc(100vh - 210px)",
          overflowY: "auto",
        }}
      >
        {cartQuantity > 0 ? (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
            {isAuthenticated ? (
              <Button variant="contained" color="primary" href="/checkout">
                Checkout
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={loginWithRedirect}
              >
                Login to Checkout
              </Button>
            )}
          </Stack>
        ) : (
          <div className="empty-cart text-center">
            <div className="fs-5">Your cart is empty</div>
            <img src={EmptyCart} alt="" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
