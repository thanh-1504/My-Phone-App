import { useRef } from "react";

export function useActiveOption() {
  const initValue = useRef([]);
  const pushElement = (element) => initValue.current.push(element);
  initValue.current.forEach(item => {
    item.add
  })
}
