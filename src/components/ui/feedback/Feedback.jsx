import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './feedback.scss';
import { uiActions } from '../../../store';

function Feedback() {
  const { show, type, msg, isLoading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.closeAlert());
  };

  return show ? (
    <div className={`feedback-container ${type}`}>
      <p className="msg">{msg}</p>
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
    </div>
  ) : null;
}

export default Feedback;
