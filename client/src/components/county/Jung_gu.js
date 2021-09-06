import React from 'react'
import JungMap from '../Map/JungMap'
import Ready from '../../images/ready1.png'

const Jung_gu = () => {
    return (
        <div>
            <JungMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Jung_gu
