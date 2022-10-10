import Navbar from './components/navbar';
import Projects from './components/project-list';
import Contact from './components/contact';
import Intro from './components/intro';
import Project from './components/project';
import Grid from '@mui/material/Grid';
import { Route, Routes } from 'react-router-dom';
function App() {

  
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/project">
        <Route path=":id" element={<Project></Project>}></Route>
      </Route>
      <Route path="/" element={
      <div>
        <Intro></Intro>
        <Projects></Projects>
      </div>
      
      }></Route>
    </Routes>
    </>
  );
}

export default App;
