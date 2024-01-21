
import './App.css'
import {Home, BunkManager, TodoList, Cgpa, Timetable} from './pages/index';
import Navbar from './component/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="page">
            <Routes>
              <Route index path='/' element={<Home />}/>
              <Route path='/home' element={<Home />}/>
              <Route path='/bunkManager' element={<BunkManager />}/>
              <Route path='/timetable' element={<Timetable />}/>
              <Route path='/reminders' element={<TodoList />}/>
              <Route path='/cgpa' element={<Cgpa />}/>
            </Routes>
        </div>
      </div>
    </>
  )
}

export default App
