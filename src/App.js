
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
        <Route path='/' element= {<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
