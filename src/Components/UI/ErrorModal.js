import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {

    const Backdrop =props =>
    {
      return <div className={classes.backdrop} onConfirm={props.onConfirm} />
  
    };

    const ModelOverlay = (props) =>
    {
        return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>

        );
    };
  return (
    <React.Fragment>
    {
        ReactDom.createPortal((<Backdrop onClick={props.onConfirm}/>),document.getElementById('backdrop-root'))
    }
    {
        ReactDom.createPortal((<ModelOverlay title={props.title} message={props.message} 
            onConfirm={props.onConfirm} ></ModelOverlay>),document.getElementById('overlay-root'))
    }

    </React.Fragment>
  );
};

export default ErrorModal;