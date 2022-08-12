import React from "react";
import useWishList from "../CustomHooks/useWishList";

function MoviesList() {
  const { wishFilms, wishRemove } = useWishList();

  return (
    <>
      {wishFilms.map(({ id, title, price, image }) => (
        <div key={id} className="Cart-Items">
          <div className="image-box">
            <img src={image} alt="" />
          </div>
          <div className="about">
            <h1 className="title">{title}</h1>
          </div>
          <div className="counter">
            <div className="btn" onClick={() => wishRemove(id)}>
              x
            </div>
          </div>
          <div className="prices">
            <div className="amount">{price}€</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MoviesList;
