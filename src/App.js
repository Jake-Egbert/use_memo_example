import { useState } from "react";
import { createTodos } from "./utils.js";
import TodoList from "./TodoList.js";
import "./styles/app.scss";

const todos = createTodos();

export default function App() {
  const [tab, setTab] = useState("all");
  const [isDark, setIsDark] = useState(false);
  console.log("app js reloading");
  return (
    <>
      <button onClick={() => setTab("all")}>All</button>
      <button onClick={() => setTab("active")}>Active</button>
      <button onClick={() => setTab("completed")}>Completed</button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <hr />
      <TodoList todos={todos} tab={tab} theme={isDark ? "dark" : "light"} />
    </>
  );
}
