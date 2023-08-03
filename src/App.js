import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IcoMenu from "./components/icoMenu";
import Home from "./components/home";
import Resume from "./components/resume";
import Experience from './components/experience';
import Contact from './components/contact';
import Projects from "./components/projects";


function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    if (currentPage === "home") {
      return <Home />;
    } else if (currentPage === "resume") {
      return <Resume />;
    }else if (currentPage === "experience") {
      return <Experience />;
    }else if (currentPage === "projects") {
      return <Projects />;
    }else if (currentPage === "contact") {
      return <Contact />;
    }
    
  };
  

  return (
    <div className="App">
      <div className="container-main">
      <IcoMenu setCurrentPage={setCurrentPage} />
      {renderPage()}
      </div>
    </div>
  );
}

export default App;
