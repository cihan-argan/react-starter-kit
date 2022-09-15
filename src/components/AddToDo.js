import { memo } from "react";
function AddToDo({ submitHandle, onChange, todo }) {
  console.log("ADDTODO RENDERED");
  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={onChange} />
        <button disabled={!todo} type="submit">
          Ekle
        </button>
      </form>
    </>
  );
}
export default memo(AddToDo);
