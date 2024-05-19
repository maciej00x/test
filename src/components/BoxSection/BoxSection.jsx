import "./BoxSection.css";
import offers from "../../data/offers.js";

const BoxSection = () => {
  const newOfferIndex = offers.findIndex((offer) => offer.isNew);

  return (
    <section id="boxSection" className="box-section-style">
      <div className="box-container our-services-content">
        <h3 className="box-header-style">Czym zajmuje się nasza firma?</h3>
        <div className="box-style">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`box ${offer.isNew ? "new-service" : ""}`}
            >
              {offer.name}
              {offer.isNew && (
                <>
                  <span className="new-product-style">(nowość)</span>
                  <div className="new-service-dot"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
