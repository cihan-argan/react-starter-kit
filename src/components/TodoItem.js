import { memo } from "react";

function TodoItem({ todo }) {
  console.log("TODOITEM RENDERED", todo);
  return (
    <>
      <li>{todo} </li>
    </>
  );
}
export default memo(TodoItem);
