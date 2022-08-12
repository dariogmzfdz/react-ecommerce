import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";
import "./WishList.css";
import { useWishList } from "../../context/WishListContext";
import { WishItems } from "./WishItems";

type WishListProps = {
  isOpen: boolean;
};

export function WishList({ isOpen }: WishListProps) {
  const { closeWish, wishItems, wishQuantity } = useWishList();
  return (
    <Modal show={isOpen} onHide={closeWish} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>WishList</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          maxHeight: "calc(100vh - 210px)",
          overflowY: "auto",
        }}
      >
        {wishQuantity > 0 ? (
          <Stack gap={3}>
            {wishItems.map((item) => (
              <WishItems key={item.id} {...item} />
            ))}
          </Stack>
        ) : (
          <div className="empty-cart text-center">
            <div className="fs-5">The wishlist is empty</div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}
