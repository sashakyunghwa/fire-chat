import React from 'react';

export default ({ input, label, type, className, meta: {error, touched} }) => (
    <div className={className}>
        <label>{label}</label>
        <input {...input} type={type || 'text'}/>
        <p className="red-text darken-3">{touched && error}</p>
    </div>  
);
