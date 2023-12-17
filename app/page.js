'use client'

//imports for UI components
import Navbar from "./UI/Navbar.jsx";
import Instructions from "./UI/Instructions.jsx";

//SPA, all component will be rendered inside the Home
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Instructions></Instructions>
    </>
  );
}
export default Home;