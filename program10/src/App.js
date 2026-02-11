import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
return (
<BrowserRouter>
<div className="App">
<nav>
<ul>
<li>
</li>
<li>
</li>
<li>
</li>
</ul>
</nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</main>
</div>
</BrowserRouter>
);
}
export default App;