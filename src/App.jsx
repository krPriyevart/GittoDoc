import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Home from './components/home.jsx';
import NotFound from './pages/notfound.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;