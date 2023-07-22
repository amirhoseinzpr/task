import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ToDo = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");
  
    
    function addItem() {
      if (!newItem) {
        alert("Press enter an item.");
        return;
      }
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };
      setItems((oldList) => [...oldList, item]);
      setNewItem("");
    }

    useEffect(()=>{
      const api = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", items)
        .then((res) => {
          console.log(res);
        });
        api();
      }
    },[])

    return (
      <div>
        <h1>My Todo List</h1>
        <input
          type="text"
          placeholder="Add an item..."
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
        <ul>
          {items.map((item) => {
            return (
              <div>
                <li key={item.id}>
                  {item.value}
                </li>
              </div>
            );
          })}
        </ul>
        
      </div>
    );
};

export default ToDo;