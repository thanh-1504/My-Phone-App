import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ScrollToTop = () => {
    const {path} = useLocation();
    useEffect(() => {

    },[path])
}