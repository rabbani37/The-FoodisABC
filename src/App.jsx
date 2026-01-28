import Banner from "./components/Headers/Banner"
import Navbar from "./components/Headers/Navbar"
import Recipes from "./components/Recipes/Recipes"



function App() {


  return (
    <div className="">
      <Navbar></Navbar>
      <Banner ></Banner>
      {/* --------------------------- */}
      <Recipes></Recipes>
    </div>
  )
}

export default App
