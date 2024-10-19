import "./App.css";
import Router from "./Routes/Router";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
   < Router />
   <ToastContainer
    theme="colored"
    position="bottom-right"
    autoClose={1000}
    hideProgressBar
    closeOnClick
    limit={4}/>
    
    </>
  );
}

export default App;
