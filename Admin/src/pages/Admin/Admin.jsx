import React from 'react';
import './admin.css';
import Sidebar from '../../components/sidebar/Sidebar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproduct from '../../components/addproduct/Addproduct.jsx';
import Listproduct from '../../components/listproduct/Listproduct.jsx';


export const Admin = () => {
    return (
      <div className="admin">
        <BrowserRouter>
        <Sidebar/>
        <Routes> {/* Corrected to Routes */}
          <Route path='/addproduct' element={<Addproduct/>} /> 
          <Route path='/listproduct' element={<Listproduct/>} />
        </Routes>
        </BrowserRouter>
      </div>
    )
  };
  
  export default Admin;
  