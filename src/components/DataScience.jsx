import React from 'react';
import Card from './Card';

const DataScience = ({data}) => {
    const dataScienceData= data.filter((item) => item.title === 'Data Science')
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {dataScienceData.map((item,index) => {
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

export default DataScience;