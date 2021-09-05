import React from 'react';
import s from '../FeedBackOptions/FeedBackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions ({ onLeaveFeedback }) {
  return (
    <div className={s.buttonBox}>
      <ul className={s.buttonsList}>
        <li className={s.buttonItems}>
          <button className={s.buttonGood} type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
        </li>
        <li className={s.buttonItems}>
           <button className={s.buttonNeutral} type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
        </li>
        <li className={s.buttonItems}>
          <button className={s.buttonBad} type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
        </button>
        </li>
        </ul>
    </div>
  );
};

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
}