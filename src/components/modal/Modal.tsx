import React, {ReactNode, Fragment} from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  children?: ReactNode;
  className?: string;
  hide: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {

  const {children, hide} = props;

  return (
    <Fragment>
      { ReactDom.createPortal(
          <div className={classes.modal}>{children}</div>,
        document.getElementById("modal-root") as HTMLElement)
      }
      { ReactDom.createPortal(
        <div className={classes.backdrop} onClick={hide}></div>,
        document.getElementById("backdrop-root") as HTMLElement)
      }
    </Fragment>
  );
}

export default Modal;
