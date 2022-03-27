import { FC, MouseEvent, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  closeModal?: () => void;
  size?: "small" | "medium" | "large";
}

const Modal: FC<ModalProps> = ({ children, closeModal, size }) => {
  useEffect(() => {
    const handleBodyKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal?.();
      }
    };

    document.body.addEventListener("keydown", handleBodyKeyDown);

    return () => {
      document.body.removeEventListener("keydown", handleBodyKeyDown);
    };
  }, [closeModal]);

  const handleOverlayClick = () => {
    closeModal?.();
  };

  const handleContainerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const portal = document.getElementById("modal-root");

  if (!portal) {
    throw new Error("#modal-root is not defined");
  }

  return ReactDOM.createPortal(
    <div onClick={handleOverlayClick} role="presentation">
      <div data-size={size} onClick={handleContainerClick} role="presentation">
        <button className="button" onClick={closeModal}>
          &times;
        </button>
        ){children}
      </div>
    </div>,
    portal
  );
};

export default Modal;
