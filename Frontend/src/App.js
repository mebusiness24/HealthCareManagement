import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './Styles/Login.css'

import Loginpage from './component/Loginpage';
import Registerpage from './component/Registerpage';
import Verficationpage from './component/Verficationpage';
import PageNotFound from './component/PageNotFound';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Loginpage/>} />
        <Route path="/register" exact element={<Registerpage/>} />
        <Route path="/verfication" exact element={<Verficationpage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
