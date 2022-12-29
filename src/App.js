import { useState } from 'react';
import './App.css';
import Navbar from './Componet/Navbar'
import Textform from './Componet/TextForm';
import Features from './Componet/Features';
import About from './Componet/About';
import Devinfo from './Componet/DevInfo';
import FAQ from './Componet/FAQ';
// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  
  
  //this is funciton is actully call in Navbar componet we send this function through props from App component
  const togglemode = () => {
    if (theme.color === 'black') {
      changetheme({
        backgroundColor: '#252525',
        color: 'white',
      })
      
      document.body.style.backgroundColor = "#252525";

    }
    else {
      changetheme({
        backgroundColor: '#e0e3e4',
        color: 'black',
      })
      
      document.body.style.backgroundColor = "#e0e3e4";
    }
  }

  //useState for dark mode
  const [theme, changetheme] = useState({
    backgroundColor: '#e0e3e4',
    color: 'black',
  })

  return (
    <>
      <Router>
        <Navbar toggleNavmode={togglemode} navtheme={theme} />{/*here we are sending toggletheme function to the Navbar Component */}
        <div className=".container-fluid" style={theme}>
          
          <Routes>
            <Route path='/TextBlend' element={<Textform heading=" Enter or paste your text in the box below" textTheme={theme} />} />
            <Route path="/features" element={<Features FeaTheme={theme} title="Features" />} />
            <Route path="/FAQ" element={<FAQ FAQTheme={theme} />} />
            <Route path="/about" element={<About textTheme={theme} />} />
          </Routes>
          <Devinfo copyright="TextBlend © 2023 | Developed By Tushar Gadher" fotheme={theme} />
        </div>
      </Router>
    </>
  );
}

export default App;
