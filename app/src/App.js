import './App.css';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ["Kanit", "Noto Sans", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
