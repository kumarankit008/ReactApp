import React, { useEffect, useState } from 'react';
import Header from './MyComponents/header';
import Todos from "./MyComponents/todos";
import Footer from "./MyComponents/footer";
import AddTodo from './MyComponents/AddToDo';
import './style.css';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './MyComponents/About';


function App() {

  let initItem;

  if (localStorage.getItem("item") === null) {
    initItem = [];
  }
  else {
    initItem = JSON.parse(localStorage.getItem("item"));
  }

  const onDelete = (task) => {
    setItem(item.filter((e) => {
      return e !== task;
    }));
    // localStorage.getItem("item");
  }

  function addTodo(title, desc) {
    var id;
    if (item.length === 0) {
      id = 0;
    }
    else {
      id = item[item.length - 1].id + 1;
    }
    const mytodo = {
      id: id,
      title: title,
      desc: desc
    }

    setItem([...item, mytodo]);


  }
  const [item, setItem] = useState(initItem);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item])



  return (

    <>
      <Router>
        <Header title="My-To-Do List" search={false} />
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos item={item} onDelete={onDelete} />
            </>

          } />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
