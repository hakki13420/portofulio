import React from 'react'
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Knowledges from './components/knowledges/Knowledges';
import Nav from './components/nav/Nav';
import StaticImage from './components/staticImage/StaticImage';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import themeData from './data/themes.json'



function App() {  
  const [actualTheme, setActualTheme]=React.useState(0)
  const [theme, setTheme]=React.useState(themeData[0])

  const myTimeOut=React.useRef(null)

  const updateThemeIndice=async ()=>{
    if(actualTheme<themeData.length-1){
      await setActualTheme((theme)=>theme+1);
    }else{
      await setActualTheme(0);
    }
  }
  const updateTheme=async()=>{
    await setTheme({...themeData[actualTheme]})
  }

  React.useEffect(() => {
    
      if (myTimeOut.current) {
          clearTimeout(myTimeOut.current);
      }
      myTimeOut.current=setTimeout(() => {            
         updateThemeIndice();
         updateTheme();
    
        document.documentElement.style.setProperty('--bg-color',theme.bgColor);
        document.documentElement.style.setProperty('--bg-color-light',theme.bgColorLight);
        document.documentElement.style.setProperty('--border-color',theme.borderColor);
        document.documentElement.style.setProperty('--border-color',theme.borderColor);

      }, 30000);
  }, [theme])


  return (
    <>
      <Header />
      <Nav />
      <About />
      <Knowledges />
      <StaticImage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
