import React, { useContext} from 'react'
import { Routes, Route, Navigate} from "react-router-dom";
import AuthContext from '../context/AuthContext';

import Home from '../pages/home/Home';
import Login from '../pages/home/Login';
import About from '../pages/company/About';
import Brand from '../pages/company/Brand';
import Careers from '../pages/company/Careers';
import Contact from '../pages/company/Contact';
import Investors from '../pages/company/Investors';
import Desktop from '../pages/products/Desktop';
import ExodusApp from '../pages/products/ExodusApp';
import Extension from '../pages/products/Extension';
import Mobile from '../pages/products/Mobile';
import TrezorWallet from '../pages/products/TrezorWallet';
import Knowledge from '../pages/supports/Knowledge';
import Status from '../pages/supports/Status';
import Support from '../pages/supports/Support';
import News from '../pages/crypto/News';
import YouTube from '../pages/crypto/YouTube';
import Newsletter from '../pages/crypto/Newsletter';
import Register from '../pages/home/Register';
import ProtectedRoute from '../utils/ProtectedRoute';




const Routers = () => {
  const {user} = useContext(AuthContext)
  return <Routes>


      <Route path='/' element={<Navigate to="/home"/>}/> 
      <Route path='/home' element={<Home />}/>
      <Route path='desktop' element={<Desktop />}/>
      <Route path='mobile' element={<Mobile />}/>
      <Route path='brower-extension' element={<Extension />}/>
      <Route path='login' element={<Login />}/>
      <Route path='register' element={<Register />}/>
      <Route path='wallet' element={
      <ProtectedRoute user={user}>
        <TrezorWallet/>
      </ProtectedRoute>}/>
      <Route path='apps' element={<ExodusApp />}/>
      <Route path='contact-supports' element={<Support />}/>
      <Route path='status' element={<Status />}/>
      <Route path='knowledge' element={<Knowledge />}/>
      <Route path='about' element={<About />}/>
      <Route path='investors' element={<Investors />}/>
      <Route path='news' element={<News />}/>
      <Route path='youtube' element={<YouTube />}/>
      <Route path='newsletter' element={<Newsletter />}/>
      <Route path='careers' element={<Careers />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='brand' element={<Brand />}/>
  </Routes>
}

export default Routers