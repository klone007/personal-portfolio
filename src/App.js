
import './App.scss';
import Layout from "./components/Layout";
import About from "./components/About";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/personal-portfolio' element= {<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/personal-portfolio/about" element={<About />} />
          <Route path="/personal-portfolio/contact" element={<Contact />} />
          <Route path ="/personal-portfolio/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
