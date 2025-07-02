import { useRef } from "react";

export const AddItem = ({ onAdd }) => {
  const addInputRef = useRef(null);

  const handleAdd = () => {
    onAdd({
      id: Date.now(),
      description: addInputRef.current.value,
    });
    addInputRef.current.value = "";
  };

  return (
    <div>
      <label>Add new item</label>
      <input ref={addInputRef} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
