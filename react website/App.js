import Navbar from './Home.js'
import {Front} from './Home.js'
import About from './About.js'
import Features from './Features.js'
import Blog from './blog.js'
import Wikipedia from './wikipedia'
import {BrowserRouter, Link, Route,Routes} from 'react-router-dom'
import { ReactDOM } from 'react'
function App() {
  return (
<BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/" element={<Front/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/Wikipedia" element={<Wikipedia/>}/>
      </Routes>
      
    </div>
</BrowserRouter>
  );
}

export default App;
