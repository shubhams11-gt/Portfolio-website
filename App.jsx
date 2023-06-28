import Sidebar from "./Components/Sidebar";
import Stars from "./Components/Stars";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

const App=()=>{
  return(
    <>
      <Sidebar/>
      <Stars/>
      <div className="main">
          <Intro/>
          <About/>
          <Work/>
          <Contact/>
      </div>
    </>
  )
}

export default App;