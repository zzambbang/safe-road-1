import React from 'react'
import NowonMap from '../Map/NowonMap'
import Ready from '../../images/ready1.png'

const Nowon_gu = () => {
    return (
        <div>
            <NowonMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Nowon_gu
