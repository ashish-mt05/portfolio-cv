import './App.css';
import Home from './component/Home';
import Resume from './component/Resume';
import Project from './component/Project'
import Contact from './component/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
