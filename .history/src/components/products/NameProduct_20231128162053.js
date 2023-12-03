import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NameProduct = ({ children = "", style = "" }) => {
  return (
    <p
      onClick={() => toast("dsadas")}
      className={`font-bold text-white ${style}`}
    >
      {children}
      <ToastContainer></ToastContainer>
    </p>
  );
};

export default NameProduct;
