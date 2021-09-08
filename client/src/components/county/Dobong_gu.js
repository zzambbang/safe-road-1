import React from 'react'
import DobongMap from '../Map/DobongMap'
import Ready from '../../images/ready1.png'

const Dobong_gu = () => {
    return (
        <div>
            <DobongMap />
            <img alt='Ready' className='Ready' src={Ready} />  
        </div>
        
    )
}

export default Dobong_gu