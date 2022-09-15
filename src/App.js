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

import { useReducer, useState, useCallback, useMemo } from "react";
import TodoReducer from "../src/reducers/TodoReducer";
import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import Todos from "./components/Todos";
function App() {
  const [count, setCount] = useState(0);
  console.log("App Rendered");
  const [state, dispatch] = useReducer(TodoReducer, {
    todos: [],
    todo: "",
    search: "",
  });
  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const onChange = useCallback((e) => {
    //setTodo(e.target.value)
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  }, []);
  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filterTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo
        .toLocaleLowerCase("tr")
        .includes(state.search.toLocaleLowerCase("tr"))
    );
  }, [state.todos, state.search]);
  return (
    <>
      <Header />
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
      <hr />
      <h1>ToDo App</h1>
      <input
        type="text"
        placeholder="Todolarda Ara "
        onChange={searchHandle}
        value={state.search}
      />
      {state.search}
      <hr />
      <AddToDo
        onChange={onChange}
        submitHandle={submitHandle}
        todo={state.todo}
      />
      <Todos todos={filterTodos} />
    </>
  );
}
export default App;
