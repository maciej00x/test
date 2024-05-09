import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container main-header-content">
        <h1 className="main-header-heading">
          Nasza firma oferuje najwyższej jakości produkty.
        </h1>
        <h2 className="h2-style">Nie wierz nam na słowo - sprawdź</h2>
        <a
          Link
          to="./components/BoxSection/BoxSection"
          className="button-style"
        >
          oferta
        </a>
      </div>
      <div className="main-header-overlay"></div>
    </header>
  );
};

export default Header;
