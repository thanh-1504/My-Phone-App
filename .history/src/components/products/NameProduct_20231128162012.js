import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NameProduct = ({ children = "", style = "" }) => {
  const notify = () => toast("Wow so easy!");
  return (
    <p 
    onClick={}
    className={`font-bold text-white ${style}`}>
      {children}
      <ToastContainer></ToastContainer>
    </p>
  );
};

export default NameProduct;
