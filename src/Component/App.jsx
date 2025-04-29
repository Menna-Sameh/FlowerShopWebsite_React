import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import Register from "./RegisterComponent";
import Contact from "./ContactUsComponent";
import About from "./AboutUsComponent";
import Dashboard from "./DashboardComponent";
import Gallery from "./GalleryComponent";
import Cart from "./CartComponent";
import {Routes, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>} />
          </Routes>
        </main>
        <footer className="fixed-footer bg-dark text-white text-center py-3">
          <Footer/>
        </footer>
      </div>
  );
}

export default App;