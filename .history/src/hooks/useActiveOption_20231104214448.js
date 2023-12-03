import { useRef } from "react";

export function useActiveOption () {
    const initValue = useRef([]);
    const pushElement = (element => initValue.current.push(el))
}