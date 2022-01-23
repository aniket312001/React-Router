import './App.css';
import { Route, Routes } from 'react-router-dom'

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Error from './Error';
import User from './User';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />  
        <Route path="/about" element={<About/>} />   
        <Route path="/contact" element={<Contact/>} />   
        <Route path="/user/:id" element={<User/>} />   
        <Route path="*" element={<Error/>} />   
         
      </Routes> 


    </>
  );
}

export default App;
