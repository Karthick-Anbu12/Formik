import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Dashboard from './Dashboard';
import Book from './Book';
import Author from './Author';
import Nav from './Nav';
import {UserProvider} from "./Context"


function App() {


  return (
   <>
   <UserProvider>
   <BrowserRouter>
   <Nav></Nav>
   <Routes>
    <Route path='/' element={<Dashboard/>}></Route>
    <Route path='/bookform' element={<Book/>}></Route>
    <Route path='/authorform' element={<Author/>}></Route>
  
   </Routes>
   </BrowserRouter>
   </UserProvider>
   </>
  )
}

export default App
