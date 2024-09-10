// import React from 'react'; 
// // import Axios from 'axios';
// import Navbar from './/components/Navbar'

// const App = () => {
//   //if adding the following lines, then need to add {usestate, useEffect} to react at the top
//   // const [data, setData]=useState("");

//   // const getData=async()=>{
//   //   const response = await Axios.get("http://localhost:3000/getData");
//   //   setData(response.data);
//   // }

//   // useEffect(()=>{
//   //   getData()
//   // }, []);

//   return(
//     <div className=''>yellow yes</div>,
//     <Navbar/>
//   )
// }

// export default App;

// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from "./components/Homepage";
import TBR from './components/TBR';
import Bookreview from './components/Bookreview';
import BookList from './components/booklist';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
  
    
      <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage items={items} />} />
        <Route path="/book-list" element={<BookList/>} />
        <Route path="/bookreview" element={<Bookreview />} />
        <Route path="/TBR" element={<TBR />} />
      </Routes>
    </Router>
    )
  }
    

export default App;
