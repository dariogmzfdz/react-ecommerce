import FilmCard from "../MovieCard/MovieCard";
import "./Gallery.css";


const MoviesGallery = (props) => {
  const { films, AddToCart, wishAdd } = props;

  console.log(Object.values(films));

  return (
    <section className="gllry-container">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} AddToCart={AddToCart} wishAdd={wishAdd} />
      ))}
    </section>
  );
};

export default MoviesGallery;
