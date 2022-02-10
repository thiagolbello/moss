import { ThemeProvider } from '@mui/material';
import NavBar from './components/NavBar';
import mTheme from './components/mTheme'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Section from './components/Section';
import Divider from './components/Divider';

function App() {
  return (
    <ThemeProvider theme={mTheme}>
      <BrowserRouter>
        <NavBar/>
        <Header/>
        <Divider svg={"url('svgs/d1.svg')"}/>
        <Divider svg={"url('svgs/d2.svg')"}/>
        <Section titulo={"¿Que es MOSS?"} descripcion={"Moss, es un sitio web enfocado en el crowdfunding y en la búsqueda de personas o equipos para la creación de un proyecto. El sitio cuenta con distintas opciones en las qué podrás crear, invertir e incluso unirte a distintos proyectos creados por nuestros usuarios."} svg={'svgs/2.svg'}/>
        <Divider svg={"url('svgs/d1.svg')"}/>
        <Divider svg={"url('svgs/d2.svg')"}/>
        <Section titulo={"Nuestro Objetivo"} descripcion={"El objetivo de MOSS es que las personas que siempre tuvieron algún proyecto en mente y quisieron realizarlo pero nunca tuvieron el dinero o los recursos para lograrlo, puedan mediante nuestro sitio realizar ese proyecto deseado. "} svg={'svgs/3.svg'}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
