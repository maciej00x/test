import "./BoxSection.css";
import offers from "../../data/offers.js";

const BoxSection = () => {
  const newOfferIndex = offers.findIndex((offer) => offer.isNew);

  return (
    <section className="box-section-style">
      <div className="box-container our-services-content">
        <h3 className="box-header-style">Czym zajmuje się nasza firma?</h3>
        <div className="box-style">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`box ${index === newOfferIndex ? "new-service" : ""}`}
            >
              {offer.name}
              {index === newOfferIndex && (
                <span className="new-product-style">(nowość)</span>
              )}
              {index === newOfferIndex && (
                <div className="new-service-dot"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
