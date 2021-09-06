import React from 'react'
import GangnamMap from '../Map/GangnamMap'
import Ready from '../../images/ready2.png'

const Gangnam_gu = () => {
    return (
        <div>
            <GangnamMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Gangnam_gu
