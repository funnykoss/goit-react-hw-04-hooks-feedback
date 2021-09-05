import React from "react";
import s from '../Notification/Notification.modules.css';
import PropTypes from 'prop-types';


export default function Notification({ message }) {
    return (
        <h2 className={s.title}>{ message}</h2>
    )
}

Notification.prototype = {
    message: PropTypes.string.isRequired,
}