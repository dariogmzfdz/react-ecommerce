import React from "react";
import "./MainPage.css";
import Totoro from "../../assets/totoro2.png";

function MainPage() {
  return (
    <section class="container">
      <div class="body-container">
        <article>
          <h1 class="body-title">GHIBLI SHOP</h1>
        </article>
        <article>
          <div class="body-text">
            A React e-commerce project on Studio Ghibli's productions.
          </div>
          <div>
            <img src={Totoro} alt="" height={300} />
          </div>
          <div class="body-text">
            A React e-commerce project on Studio Ghibli's productions.
          </div>
        </article>
      </div>
    </section>
  );
}

export default MainPage;
