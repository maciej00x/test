import "./ListSection.css";

const ListSection = () => {
  return (
    <section className="section our-crew-section">
      <div className="container our-crew-section-content">
        <h2 className="section-heading-h2">Nasi specjaliści</h2>
        <ul className="our-crew-list">
          <li className="our-crew-list-element">
            <div className="our-crew-list-element-image our-crew-image-1"></div>

            <div className="our-crew-list-element-content">
              <h4 className="tile-heading">Tytus Rozrabiaka [IT - wsparcie]</h4>
              <p className="tile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                in dolore dicta modi aspernatur odio ea veniam, at eius ut quis,
                molestiae, deleniti consequuntur dolor. Odit laudantium corrupti
                impedit quaerat.
              </p>
            </div>
          </li>
          <li className="our-crew-list-element">
            <div className="our-crew-list-element-image our-crew-image-2"></div>

            <div className="our-crew-list-element-content">
              <h4 className="tile-heading">Tytus Rozrabiaka [IT - wsparcie]</h4>
              <p className="tile-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                in dolore dicta modi aspernatur odio ea veniam, at eius ut quis,
                molestiae, deleniti consequuntur dolor. Odit laudantium corrupti
                impedit quaerat.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ListSection;
