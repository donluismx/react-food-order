import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = props => {
  <div className={classes.modal}>
    {props.children}
  </div>
}

const Modal = props => {
  return
  <>
  {ReactDom.createPortal(
    <Backdrop onConfirm={props.onConfirm} />,
    document.getElementById('backdrop-root')
  )}
  {ReactDom.createPortal(
    <ModalOverlay>
      {props.children}
    </ModalOverlay>,
    document.getElementById('backdrop-overlay')
  )}
  </>
}

export default Modal;