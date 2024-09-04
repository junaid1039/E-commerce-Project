import React from 'react'
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Admin } from './pages/Admin/Admin';

const App = () => {
  return (
   <>
   <Navbar/>
   <Admin/>
   </>
  )
};

export default App;