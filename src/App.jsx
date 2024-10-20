import React from "react";
import SubscriptionPlanTitle from "./Componets/SubscriptionTitle/SubscriptionPlanTitle";
import Cards from "./Componets/Cards/Cards";

function App() {
  return (
    <>
      <section title="Pricing-Cards" className="pricingCardsContainer">

        {/* Monthly - Anually Schemes Title */}
        <div className="subscriptionPlanTitleContainer">
          <SubscriptionPlanTitle />
        </div>

        {/* Pricing Cards */}
        <div className="cardsContainer">
          <Cards />
        </div>
        
      </section>
    </>
  );
}

export default App;
