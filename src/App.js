import Navbar from './components/navbar';
import Projects from './components/projects';
import Contact from './components/contact';
import Intro from './components/intro';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Intro></Intro>
    <Projects></Projects>
    <Contact></Contact>

    <h1>Hello there</h1>
   </div>
  );
}

export default App;
