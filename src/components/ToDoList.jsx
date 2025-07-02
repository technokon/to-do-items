import { useRef } from "react";
import { useState } from "react";
import { AddItem } from "./AddItem";
import { ListItem } from "./ListItem";

export const ToDoList = () => {
  const [list, setList] = useState([]);

  const handleAdd = (item) => {
    setList((list) => [...list, item]);
  };

  const handleUpdate = (id, description) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, description } : item))
    );
  };

  return (
    <>
      {list.length ? (
        <ul>
          {list.map((item) => (
            <ListItem key={item.id} item={item} onUpdate={handleUpdate} />
          ))}
        </ul>
      ) : (
        <div>No items yet please add</div>
      )}
      <AddItem onAdd={handleAdd} />
    </>
  );
};
