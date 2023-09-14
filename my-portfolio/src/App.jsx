import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, 
} from "react-router-dom";


import Landingpage from "./components/Landingpage"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Root from "./components/root";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Landingpage />} />     
        <Route path="/about" element={<About/>} />         
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    )
  )

  return (

    <>
      <div>
        <RouterProvider router = {router}/>
        <Footer/>
      </div>
    </>
  )
}

export default App
