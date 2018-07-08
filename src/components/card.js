import React from 'react';

export default props => (
    <div className="row app">
        <div className="vert-align col s12 m8">
            <div className="card grey lighten-3">
                <div className="card-content">
                    <span className="card-title center">{props.title}</span>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
);