import { useState } from 'react';
import './App.css';
import Nav from './Components/nav';
import MainDash from './Components/maindash';
import SubDash from './Components/subdashboard';

function App() {
  const [theme, setTheme] = useState('light')
  
  return (
    <div className={`app ${theme} flex items-center`}>
      <div className='wrapper max-w-[1440px] mx-auto px-7'>
        <Nav/>
        <MainDash />
        <SubDash />
      </div>
    </div> 
  );
}

export default App;
