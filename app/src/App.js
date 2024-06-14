import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';

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
      <About />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
