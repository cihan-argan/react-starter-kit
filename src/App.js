// import { useState } from "react";
// import { Fragment } from "react";
// import "./tailwind.css";
// import Button from "./components/Button";
// import Tab from "./components/Tab";
// function Profile() {
//   console.log("Profile Tabına geldiniz..");
//   return <div>Burası Profile Tabı !</div>;
// }
// function App() {
//   // const h1 = createElement("h1", null, "Merhaba ben H1");
//   // return createElement(
//   //   "main",
//   //   {
//   //     className: "test",
//   //     id: "main",
//   //   },
//   //   h1
//   // );
//   const name = "Cihan";
//   const style = { color: "white", backgroundColor: "black" };

//   const [activeTab, setActiveTab] = useState(1);
//   return (
//     <Fragment>
//       <div style={{ padding: 20 }}>
//         <button onClick={() => setActiveTab(2)}>Aktif Tabı değiştir</button>
//         <Tab
//           activeTab={activeTab}
//           onChange={(tabIndex) => setActiveTab(tabIndex)}
//         >
//           <Tab.Panel title="Profil">
//             <Profile />
//           </Tab.Panel>
//           <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
//           <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
//         </Tab>
//         {activeTab === 2 && <div>Burası da ekstra alan</div>}
//       </div>
//       <div style={{ padding: 20 }}>
//         <Button>Button Örneği</Button>
//         <Button variant="danger">Button Örneği</Button>
//         <Button variant="success">Button Örneği</Button>
//         <Button variant="warning">Button Örneği</Button>
//       </div>

//       <h1
//         style={{
//           color: "red",
//           backgroundColor: "yellow",
//           justifyContent: "between",
//         }}
//       >
//         {" "}
//         Prototurk
//       </h1>
//       <h1 style={style}> Prototurk</h1>
//       <label htmlFor="search" tabIndex={2}>
//         Arama
//       </label>
//       <input
//         type="text"
//         id="search"
//         tabIndex={1}
//         onClick={() => alert("aRAMAYA tIKLADINIZ")}
//       ></input>
//       {name + "Argan"}
//     </Fragment>
//   );
// }

// export default App;

//Konu 2
// import Test from "./components/Test";
// import { useState } from "react";
// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow((show) => !show)}>
//         {show ? "Gizli" : "Göster"}
//       </button>
//       {show && <Test />}
//     </>
//   );
// }
// export default App;

//Konu 3
// import { forwardRef, useRef } from "react";
// const Input = forwardRef((props, ref) => {
//   return <input ref={ref} type="text" {...props} />;
// });

// function App() {
//   const inputRef = useRef();
//   const focusInput = () => {
//     console.log(inputRef.current);
//     inputRef.current.focus();
//   };
//   return (
//     <>
//       <h1>useRef - forwardRef </h1>
//       <input type="text" ref={inputRef} />
//       <button onClick={focusInput}>Focusla</button>
//       <div>
//         <Input ref={inputRef} />
//         <button onClick={focusInput}>Focusla2</button>
//       </div>
//     </>
//   );
// }
// export default App;

// import { useReducer, useState, useCallback, useMemo } from "react";
// import TodoReducer from "../src/reducers/TodoReducer";
// import AddToDo from "./components/AddToDo";
// import Header from "./components/Header";
// import Todos from "./components/Todos";
// function App() {
//   const [count, setCount] = useState(0);
//   console.log("App Rendered");
//   const [state, dispatch] = useReducer(TodoReducer, {
//     todos: [],
//     todo: "",
//     search: "",
//   });
//   const submitHandle = useCallback(
//     (e) => {
//       e.preventDefault();
//       dispatch({
//         type: "ADD_TODO",
//         todo: state.todo,
//       });
//     },
//     [state.todo]
//   );

//   const onChange = useCallback((e) => {
//     //setTodo(e.target.value)
//     dispatch({
//       type: "SET_TODO",
//       value: e.target.value,
//     });
//   }, []);
//   const searchHandle = (e) => {
//     dispatch({
//       type: "SET_SEARCH",
//       value: e.target.value,
//     });
//   };

//   const filterTodos = useMemo(() => {
//     return state.todos.filter((todo) =>
//       todo
//         .toLocaleLowerCase("tr")
//         .includes(state.search.toLocaleLowerCase("tr"))
//     );
//   }, [state.todos, state.search]);
//   return (
//     <>
//       <Header />
//       <h3>{count}</h3>
//       <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
//       <hr />
//       <h1>ToDo App</h1>
//       <input
//         type="text"
//         placeholder="Todolarda Ara "
//         onChange={searchHandle}
//         value={state.search}
//       />
//       {state.search}
//       <hr />
//       <AddToDo
//         onChange={onChange}
//         submitHandle={submitHandle}
//         todo={state.todo}
//       />
//       <Todos todos={filterTodos} />
//     </>
//   );
// }
// export default App;

import { useEffect, useMemo, useState } from "react";
function App() {
  const [name, setName] = useState("Cihan");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("2");
  const fruits = ["Elma", "Armut", "Çilek"];
  const [fruit, setFruit] = useState("0");
  const selectedFruit = useMemo(() => {
    return fruits[fruit];
  }, [fruit]);

  const cars = [
    { key: "1", value: "audi" },
    { key: "2", value: "volvo" },
  ];

  const [car, setCar] = useState("");
  const selectedCar = cars.find((c) => c.key === car);

  const categoryList = [
    { key: 1, value: "PHP" },
    { key: 2, value: "JavaScript" },
    { key: 3, value: "Css" },
    { key: 4, value: "Sass" },
  ];
  const [categories, setCategories] = useState([1, 3]);
  const selectedCategories =
    categories && categoryList.filter((c) => categories.includes(c.key));

  const [rule, setRule] = useState(true);
  const [rules, setRules] = useState([
    { key: 1, value: "Birinci Kuralı kabul ediyorum", checked: false },
    { key: 2, value: "İkinci Kuralı kabul ediyorum", checked: false },
    { key: 3, value: "Üçüncü Kuralı kabul ediyorum", checked: false },
    { key: 4, value: "Dördüncü Kuralı kabul ediyorum", checked: true },
  ]);

  const checkRule = (key, checked) => {
    setRules((rules) =>
      rules.map((rule) => {
        if (key === rule.key) {
          rule.checked = checked;
        }
        return rule;
      })
    );
  };

  const levels = [
    { key: "beginner", value: "Başlangıç" },
    { key: "jr_developer", value: "Jr.Developer" },
    { key: "sr_developer", value: "Sr.Developer" },
  ];
  const [level, setLevel] = useState("jr_developer");
  const selectedLevel = levels.find((l) => l.key === level);

  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState(false);
  const enabled = rules.every((rule) => rule.checked) && avatar;
  const submitHandle = () => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
  };
  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();////veri okuma apisi başlatıyoruz.
      fileReader.addEventListener("load", function () { ////altta readAsDataURL verileri okuyoruz.O okuma tamamladığın da
        setImage(this.result);//veriyi al setImage içine at diyoruz.
      });
      fileReader.readAsDataURL(avatar);//verileri okuyor.
    }
  }, [avatar]);
  return (
    <>
      <button onClick={() => setName("Ali")}>Adı Değiştir </button>
      <input
        type="text"
        value={name}
        // placeholder="Adınız:"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {name}
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      {description}
      <br />
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Seçiniz:</option>
        <option value="1">Erkek</option>
        <option value="2">Kadın</option>
      </select>
      <br />
      {gender}
      <br />
      <select value={fruit} onChange={(e) => setFruit(e.target.value)}>
        <option value="">Seçiniz:</option>
        {fruits.map((fruit, index) => (
          <option value={index} key={index}>
            {fruit}
          </option>
        ))}
      </select>
      <br />
      {selectedFruit}
      <br />

      <select value={car} onChange={(e) => setCar(e.target.value)}>
        <option value="">Seçiniz</option>
        {cars.map((car) => (
          <option value={car.key} key={car.key}>
            {car.value}
          </option>
        ))}
      </select>
      <br />
      {JSON.stringify(selectedCar, null, 2)}
      <br />
      <button onClick={() => setCategories([2, 3, 4])}>Kategorileri Seç</button>
      <select
        value={categories}
        multiple={true}
        onChange={(e) =>
          setCategories(
            [...e.target.selectedOptions].map((option) => +option.value)
          )
        }
      >
        {categoryList.map((category) => (
          <option value={category.key} key={category.key}>
            {category.value}
          </option>
        ))}
      </select>
      <br />
      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>
      <br />
      <label>
        <input
          type="checkbox"
          checked={rule}
          onChange={(e) => setRule(e.target.checked)}
        />
        Kuralları Kabul Ediyorum
      </label>
      <br />
      {rules.map((rule) => (
        <label key={rule.key}>
          <input
            type="checkbox"
            checked={rule.checked}
            onChange={(e) => checkRule(rule.key, e.target.checked)}
          />
          {rule.value}
          <br />
        </label>
      ))}
      <br />
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <br />

      {levels.map((l, index) => (
        <label key={index}>
          <input
            type="radio"
            value={l.key}
            checked={l.key === level}
            onChange={(e) => setLevel(e.target.value)}
          />
          {l.value}
        </label>
      ))}
      <br />
      {JSON.stringify(selectedLevel)}

      <br />
      <label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </label>
      <br />
      {avatar && (
        <>
          <h3>{avatar.name}</h3>
          {image && <img src={image} />}
        </>
      )}
      <br />
      <button onClick={submitHandle} disabled={!enabled}>
        Devam Et
      </button>
    </>
  );
}
export default App;
