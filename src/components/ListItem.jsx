import { useState } from "react";
import { useRef } from "react";

export const ListItem = ({ item, onUpdate }) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef(null);

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    onUpdate(id, inputRef.current.value);
    setEdit(false);
  };
  const handleClick = () => {
    setEdit(true);
  };

  return (
    <li onClick={handleClick}>
      {!edit && <div>{item.description}</div>}
      {edit && (
        <div>
          <input ref={inputRef} defaultValue={item.description} />
          <button onClick={(e) => handleUpdate(e, item.id)}>Update</button>
        </div>
      )}
    </li>
  );
};
