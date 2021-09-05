import React from 'react';
import s from '../Statistic/Statistics.module.css';
import PropTypes from 'prop-types';

 export default function Statistics ({ good, neutral, bad, total, positiveFeedbackPercentage}){
    return (
       
           <div>
                <ul className={s.list}>
                <li>
                    <p>Good: {good}</p>
                </li>
                <li>
                    <p>Neutral: {neutral}</p>
                </li>
                <li>
                    <p>Bad: {bad}</p>
                </li>
                <li>
                    <p>Total: {total}</p>
                </li>
                <li>
                    <p>Positive Feedback: {positiveFeedbackPercentage}%</p>
                </li>
                </ul>
            </div>
         
     )
}

 
Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
     
 }