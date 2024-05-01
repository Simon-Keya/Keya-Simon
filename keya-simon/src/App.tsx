import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { Header, Footer, Sidebar } from './components/Layout';
import {
  Home,
  Login,
  Register,
  Profile,
  BlogPostDetail,
  CreateBlogPost,
  AdminDashboard,
  UserManagement,
  PostManagement,
} from './pages';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="flex">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/blog/:id" component={BlogPostDetail} />
            <Route path="/create-post" component={CreateBlogPost} />
            <Route path="/admin" component={AdminDashboard} />
            <Route path="/admin/users" component={UserManagement} />
            <Route path="/admin/posts" component={PostManagement} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;