import './App.scss';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <div className="App">
          hello
          <div className='InApp'>
            <label>not hehe</label>
          </div>
          <div>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
