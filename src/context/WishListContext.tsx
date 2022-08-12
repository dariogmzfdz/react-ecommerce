import { createContext, ReactNode, useContext, useState } from "react";
import { WishList } from "../components/WishList/WishList";
import { useLocalStorage } from "../components/CustomHooks/useLocalStorage";

type WishListProviderProps = {
  children: ReactNode;
};

type WishItem = {
  id: number;
  quantity: number;
};

type WishListContext = {
  openWish: () => void;
  closeWish: () => void;
  addToWishList: (id: number) => void;
  removeFromWish: (id: number) => void;
  wishQuantity: number;
  wishItems: WishItem[];
};

const WishListContext = createContext({} as WishListContext);

export function useWishList() {
  return useContext(WishListContext);
}
export function WishListProvider({ children }: WishListProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [wishItems, setWishItems] = useLocalStorage<WishItem[]>(
    "wish-list",
    []
  );

  const wishQuantity = wishItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openWish = () => setIsOpen(true);
  const closeWish = () => setIsOpen(false);

  function addToWishList(id: number) {
    setWishItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromWish(id: number) {
    setWishItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <WishListContext.Provider
      value={{
        addToWishList,
        removeFromWish,
        openWish,
        closeWish,
        wishItems,
        wishQuantity,
      }}
    >
      {children}
      <WishList isOpen={isOpen} />
    </WishListContext.Provider>
  );
}
