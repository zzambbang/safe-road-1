import React from 'react'
import DongdaemunMap from '../Map/DongdaemunMap'
import Ready from '../../images/ready1.png'

const Dongdaemun_gu = () => {
    return (
        <div>
            <DongdaemunMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Dongdaemun_gu