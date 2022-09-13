import styles from "./App.module.css";
import Test from "./Test";
import { Title } from "./Components";
import Bootstrap from "./Bootstrap";
//import "./tailwind.css";
import "./style.scss";
import Tailwind from "./Tailwind";

function Styles() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>
      </p>
      <Test />
      {process.env.NODE_ENV === "production" && (
        <>
          <img src="/logo192.png" alt=" " />
        </>
      )}
      <Bootstrap />
      <Tailwind />
    </div>
  );
}
export default Styles;
