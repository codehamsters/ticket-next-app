import NavBar from "./Componenets/NavBar/NavBar";
import "./main.css";

const Main = ({ children, modal }) => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="children-container">{children}</div>
      {modal}
    </div>
  );
};

export default Main;
