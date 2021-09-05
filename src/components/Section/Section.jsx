import React from 'react';
import s from '../Section/Section.modules.css';
import PropTypes from 'prop-types';

export default function Section({ title = 'Title', children }){
    return (
        <div className={s.section}>
            <h1 className={s.title}>{title}</h1>
            {children}
        </div>
    );
}
Section.defaultProps = {
  title: "Statistics",
};

Section.prototype = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
}