import TodoInputField from "../TodoInputField/TodoInputField";
import TodoList from "../TodoList/TodoList";
import "./style.scss";

const Main = () => {
  return (
    <div className="main_wrapper">
      <div className="main__container">
        <h1>Today main focus</h1>
        <h1>Design team meeting</h1>
        <TodoInputField />
        <TodoList />
      </div>
    </div>
  );
};

export default Main;
