import "./MoviePage.css";
import { StoreItem } from "../MovieCard/MovieCard";
import storeItems from "../../data/db.json";

console.log(storeItems);

export function Store() {
  return (
    <>
      <section className="gllry-container">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </section>
    </>
  );
}
