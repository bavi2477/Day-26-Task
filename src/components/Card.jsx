import React from 'react';

const Card = ({item, index}) => {
    return (
            <div className="card" style={{ width: '450px' }}>
                <img src={item.image} className="card-img-top" alt={item.title} style={{ width: '450px', height: '300px', objectFit: 'cover' }}  />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                </div>
                <div className="card-footer">
                    Date: {item.date} {item.month}
                </div>
            </div>
    );
};

export default Card;