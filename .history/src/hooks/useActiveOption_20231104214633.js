import { useRef } from "react";

export function useActiveOption() {
  const initValue = useRef([]);
  const pushElement = (element) => initValue.current.push(element);
  initValue.current.forEach(item => {
    item.addEventListener('click',(ele => {
        initValue.current.forEach(item => item.classList.remove('option__type--active'));
        ele.
    }))
  })
}
