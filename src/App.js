import logo from './logo.svg';
import AllRoutes from './AllRoutes';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={THEME}>

    <div className="App">
      <AllRoutes />
    </div>
    </ThemeProvider>
  );
}

export default App;
const THEME = createTheme({
  typography: {
   "fontFamily":`Georgia, 'Times New Roman', Times, serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
  card:{
    "box-shadow":`rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`
  }

});