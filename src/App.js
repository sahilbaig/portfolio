import Navbar from './components/navbar';
import Projects from './components/project-list';
import Contact from './components/contact';
import Intro from './components/intro';
import Project from './components/project';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Project></Project>
    <Routes>
      <Route path="/project">
        <Route path=":id" element={<Projects auth="false"></Projects>}></Route>
      </Route>
      <Route path="/" element={<Intro></Intro>}></Route>
    </Routes>
    </>
  );
}

export default App;
