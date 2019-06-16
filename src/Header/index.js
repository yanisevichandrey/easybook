import React from 'react';
import './styles.css';

const header = () => {
    return (
        <div className="header">
            <div className="logo">Easy-Book</div>
            <div>
                <ul className="pages__list">
                    <li className="pages__list__page">Головна</li>
                    <li className="pages__list__page">Профіль</li>
                    <li className="pages__list__page">Вихід</li>
                </ul>
            </div>
        </div>
    )
}

export default header;
