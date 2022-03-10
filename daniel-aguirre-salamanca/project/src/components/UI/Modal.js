import "./UI.css";
import { useEffect, useRef, useState } from "react";
const Modal = ({ showModal, onCloseModal, itemList }) => {
  const [modalClass, setModalClass] = useState("modal");
  const [modalBoxClass, setModalBoxClass] = useState("modal__box");
  const modalBackgroundRef = useRef();
  const closeModal = () => {
    setModalClass("modal");
    setModalBoxClass("modal__box");
    onCloseModal();
  };
  
  const closeWithEsc = (e)=>{
    if (e.code == "Escape"){
      console.log(true);
      closeModal();
    }
  }
  useEffect(() => {
    if (showModal) {
      setModalClass("modal modal--open");
      setModalBoxClass("modal__box modal__box--open");
      document.addEventListener('keyup', closeWithEsc);
    }
    return ()=>{document.removeEventListener('keyup', closeWithEsc)};
    
  }, [showModal]);
  
  const info = itemList ? itemList.map((tuple, index) => <tr key={index}><td>{tuple[0]}</td><td>{tuple[1]}</td></tr>): "";
  return (
    <article className={modalClass} ref={modalBackgroundRef} onClick={closeModal}>
      <section className={modalBoxClass} onClick={(event) => {event.stopPropagation();}}>
        <table>
          <tbody>
            {modalBoxClass.includes("modal__box--open") && info}
          </tbody>
        </table>
      </section>
    </article>
  );
};

export default Modal;
