import React from 'react';
import Card from './Card';

const FullStack = ({data}) => {
    const fullstackData = data.filter((item) => item.title === 'Full Stack Development')
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {fullstackData.map((item,index) => {
                return(
                    <>
                    <div className='col'>
                    <Card item={item} index={index}/>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default FullStack;