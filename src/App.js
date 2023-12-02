import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from "react-router";
//import { BrowserRouter } from 'react-router-dom'
import Login from './components/login';
import AddCoordinator from './components/AddCoordinator';
import Student from './components/Student';
import Faculty from './components/Faculty';
import coordinator from './components/Coordinator';
import AddFaculty from './components/AddFaculty';
import AddStudent from './components/AddStudent';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path="/" Component={Home}/>           
          <Route exact path="/login" Component={Login}/>           
          <Route exact path="/About" Component={About}/>           
          <Route exact path="/Student" Component={Student}/>           
          <Route exact path="/Faculty" Component={Faculty}/>           
          <Route exact path="/Coordinator" Component={coordinator}/>           
          <Route exact path="/AddCoordinator" Component={AddCoordinator}/>           
          <Route exact path="/AddFaculty" Component={AddFaculty}/>           
          <Route exact path="/AddStudent" Component={AddStudent}/>           
        </Routes>
      </div>
    </>
  );
}

export default App;
