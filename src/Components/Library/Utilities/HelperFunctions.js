import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const checkLength=(e)=>{
  const handleWheel = (event) => {
    event.target.blur();
  };
  if (document.activeElement !== e.target) {
    return true;
  }
 
  e.target.addEventListener('wheel', handleWheel, { passive: true });
  const KEYS = {
     leftKey: 37,
     rightKey: 39,
     backspace: 8,
     deleteKey: 46,
     digitZero: 48,
     digitNine: 57
  };
if (
    e.keyCode === KEYS.backspace ||
    e.keyCode === KEYS.deleteKey ||
    e.keyCode === KEYS.rightKey ||
    e.keyCode === KEYS.leftKey) {
      return true;
  }
if(e.keyCode < KEYS.digitZero ||
 e.keyCode > KEYS.digitNine ||
 e.target.value.length ===e.target.maxLength ||
 e.shiftKey) {
      e.stopPropagation();
      e.preventDefault();
      return false;
  }
  return true;
}

