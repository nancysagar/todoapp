import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addList = (inputText) => {
    if (inputText !== "") {
      setTodoList([...todoList, { text: inputText, completed: false }]);
    }
  };

  const toggleComplete = (index) => {
    const updatedList = todoList.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(updatedList);
  };

  const deleteItem = (key) => {
    const updatedList = todoList.filter((_, index) => index !== key);
    setTodoList(updatedList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <Input addList={addList} />
        <h1 className="app-heading">TO DO</h1>
        <hr />
        {todoList.length === 0 ? (
          <div className="no-tasks">
            <img
              src="/img.jpg" // Replace with your image URL
              alt="No tasks"
              className="no-tasks-image"
            />
            <h3>No tasks to show. Add a task to get started!</h3>
          </div>
        ) : (
          <ul>
            {todoList.map((listItem, i) => (
              <List
                key={i}
                index={i}
                item={listItem.text}
                completed={listItem.completed}
                toggleComplete={toggleComplete}
                deleteItem={deleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default App;
