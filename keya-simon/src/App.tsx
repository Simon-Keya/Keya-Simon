import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; // Updated import
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
import PrivacyTermsPolicy from './pages/PrivacyTermsPolicy';   

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          {/* Use Routes instead of directly using Route */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/createblogpost" element={<CreateBlogPost />} />
            <Route path="/blogpostdetail" element={<BlogPostDetail />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/self-improvement" element={<SelfImprovement />} />
            <Route path="/psychology" element={<Psychology />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/art" element={<Art />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/privacytermspolicy" element={<PrivacyTermsPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
