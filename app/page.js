'use client'
//^ to allow react hooks to work

//imports for UI components
import Navbar from "./UI/Navbar.jsx";
import Instructions from "./UI/Instructions.jsx";
import ObjectCreationForm from "./UI/ObjectCreationForm.jsx";

//SPA, all components will be rendered inside the Home
const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Instructions></Instructions>
      <ObjectCreationForm></ObjectCreationForm>
    </>
  );
}
export default Home;