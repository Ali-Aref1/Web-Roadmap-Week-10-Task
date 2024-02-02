import './App.css';
import ToDoInput from './components/Todo/ToDoInput.jsx'
import { useState } from "react";
import ToDoItem from './components/Todo/ToDoItem.jsx';

export default function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <ToDoInput items={items} setItems={setItems}/>
      <div>
            {items.map((item, index) => <ToDoItem key={index} item={item} items={items} setItems={setItems}/>)}
      </div>
    </div>
  );
}
