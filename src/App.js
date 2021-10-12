import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>
            Alec Stewart's Portfolio
        </h1>
<nav pageRender = {setPagerender} />
      </header>
      <div>
        <p>
          Cool Subtitle Here!
        </p>
      </div>
       {pageRender === "About Me"?<AboutMe />:""}
      {pageRender === "Projects"?<Projects />:""}
      {pageRender === "Contact Me"?<Contact />:""}
    </div>
  );
}

export default App;
