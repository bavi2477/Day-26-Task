import React from 'react';
import Card from './Card';

const All = ({data}) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            {data.map((item, index) => {
                return(
                    <>
                    <div className="col">
                      <Card item = {item} index ={index} />
                      </div>
                    </>
                )
            })}
        </div>
    );
};

export default All;