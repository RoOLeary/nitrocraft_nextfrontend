/* eslint-disable no-console */
import { useState } from 'react';
const useModal = () => {
  const [show, setShow] = useState(false);
  function toggleVisibility() {
    setShow(!show);
    console.log('toggleVisibility', show);
  }
  return {
    show,
    toggleVisibility,
  };
};
export default useModal;