import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {

  const getStorageTheme = () =>{
    let theme = "light-theme";
    if(localStorage.getItem("theme"))
    {
      theme = localStorage.getItem("theme");
    }
    return theme;
  }

  const [theme,setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if(theme === "light-theme")
    {
      setTheme("dark-theme");
    }
    else
    {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme",theme);
  } , [theme])

  return <amin>
    <nav>
      <div className="nav-center">
        <h1>React Toggle Theme</h1>
        <button className="btn" onClick={toggleTheme}>Toggle <i class='fas fa-toggle-on'></i></button>
      </div>
    </nav>
    <section className="articles">
      {data.map((item) =>{
        return <Article key={item.id} {...item}></Article>
      })}
    </section>
  </amin>
}

export default App
