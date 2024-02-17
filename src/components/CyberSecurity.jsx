import React from 'react';
import Card from './Card';

const CyberSecurity = ({data}) => {
    const CyberSecurityData = data.filter((item) => item.title === 'Cyber Security')
    return (
        <div  className="row row-cols-1 row-cols-md-2 g-4">
            {CyberSecurityData.map((item,index) => {
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

export default CyberSecurity;