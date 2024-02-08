import "./dash.css";
import Body from './../components/body';
import Footer from './../components/footer';
import { ToastContextProvider } from './../components/context/ToastContext';

const  Dashboard  = () =>{
  return (
    <>
    <ToastContextProvider>
    <Body/>
    <Footer/>
    </ToastContextProvider>
    </>
  )
}

export default  Dashboard ;
