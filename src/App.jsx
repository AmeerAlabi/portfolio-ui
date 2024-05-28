import React from 'react';
import Navbar from './components/Navbar';
import Works from './components/Works';
import Posts from './components/Posts';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduction from './components/Introduction';
import PostsPage from './components/PostsPage'; // Import PostsPage component
import WorksPage from './components/WorksPage'; // Import WorksPage component
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
  
        <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<PostsPage />} />
          <Route path="/posts" element={<WorksPage />} />
        </Routes>

       
      </BrowserRouter>
    </div>
  );
}

export default App;
