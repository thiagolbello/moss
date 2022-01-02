import { ThemeProvider } from '@mui/material';
import './App.css';
import NavBar from './components/NavBar';
import mTheme from './components/mTheme'

function App() {
  return (
    <ThemeProvider theme={mTheme}>
      <NavBar/>
    </ThemeProvider>
  );
}

export default App;
