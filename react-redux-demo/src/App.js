import './App.css';
import UserForm from './components/user';
import UserDetails from './components/addedUsers';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (

    <Router>
      <div>
        <div style={styles.container}>
          <h1>React Redux User Example</h1>
          <nav>
            <Link to="/add-user">
              <button>Add User</button>
            </Link>
            <Link to="/about">
              <button>About Us</button>
            </Link>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
            <Link to="/view-user">
              <button>View User</button>
            </Link>
          </nav>
        </div>
        <Routes>
          <Route path="/add-user" element={<UserForm />} />
          <Route path="/view-user" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',

  }
}
export default App;
