import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NameProduct = ({ children = "", style = "" }) => {
  return (
    <p
      onClick={() => toast("dsadas")}
      className={`font-bold text-white ${style}`}
    >
      {children}
    </p>
  );
};

export default NameProduct;
