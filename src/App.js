import { useState } from "react";
import { Fragment } from "react";
import "./tailwind.css";
import Button from "./components/Button";
import Tab from "./components/Tab";
function Profile() {
  console.log("Profile Tabına geldiniz..");
  return <div>Burası Profile Tabı !</div>;
}
function App() {
  // const h1 = createElement("h1", null, "Merhaba ben H1");
  // return createElement(
  //   "main",
  //   {
  //     className: "test",
  //     id: "main",
  //   },
  //   h1
  // );
  const name = "Cihan";
  const style = { color: "white", backgroundColor: "black" };

  const [activeTab, setActiveTab] = useState(1);
  return (
    <Fragment>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı değiştir</button>
        <Tab
          activeTab={activeTab}
          onChange={(tabIndex) => setActiveTab(tabIndex)}
        >
          <Tab.Panel title="Profil">
            <Profile />
          </Tab.Panel>
          <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
        </Tab>
        {activeTab === 2 && <div>Burası da ekstra alan</div>}
      </div>
      <div style={{ padding: 20 }}>
        <Button>Button Örneği</Button>
        <Button variant="danger">Button Örneği</Button>
        <Button variant="success">Button Örneği</Button>
        <Button variant="warning">Button Örneği</Button>
      </div>

      <h1
        style={{
          color: "red",
          backgroundColor: "yellow",
          justifyContent: "between",
        }}
      >
        {" "}
        Prototurk
      </h1>
      <h1 style={style}> Prototurk</h1>
      <label htmlFor="search" tabIndex={2}>
        Arama
      </label>
      <input
        type="text"
        id="search"
        tabIndex={1}
        onClick={() => alert("aRAMAYA tIKLADINIZ")}
      ></input>
      {name + "Argan"}
    </Fragment>
  );
}

export default App;
