

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Login from './pages/Login'




function App() {


  return (
    <>
      {/* <Sidebar/> */}

      {/* <Home/> */}
      {/* <Courses/> */}
      {/* <Login/> */}

      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
      </Routes>
    </>
  )
}

export default App
