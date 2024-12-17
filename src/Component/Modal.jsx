import { createPortal } from "react-dom";
import { RiCloseLargeLine } from "react-icons/ri";
const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[40%] rounded-md bg-white p-4">
            <div className="flex justify-end">
              <RiCloseLargeLine onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
