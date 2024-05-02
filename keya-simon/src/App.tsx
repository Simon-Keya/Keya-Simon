// App.tsx

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import BlogPostDetail from './pages/BlogPostDetail';
import CreateBlogPost from './pages/CreateBlogPost';
import AdminDashboard from './pages/AdminDashboard';
import SelfImprovement from './pages/SelfImprovement';
import Psychology from './pages/Psychology';
import Philosophy from './pages/Philosophy';
import Art from './pages/Art';
import Technology from './pages/Technology';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
          <Route path="/create-blog-post" element={<CreateBlogPost />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/self-improvement" element={<SelfImprovement />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/art" element={<Art />} />
          <Route path="/technology" element={<Technology />} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
