import React from 'react';
import Card from './Card';

const Career = ({data}) => {
    const careerData = data.filter((item) => item.title === 'Career')
    return (
        <div  className="row row-cols-1 row-cols-md-2 g-4">
            {careerData.map((item,index) => {
                return(
                    <>
                    <div className='col'>
                    <Card  item={item} index={index}/>
                    </div>
                    </>
                )
            })}
        </div>
    );
};

export default Career;