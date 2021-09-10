import React from 'react'
import SongpaMap from '../Map/SongpaMap'
import Ready from '../../images/ready2.png'

const Songpa_gu = () => {
    return (
        <div>
            <SongpaMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Songpa_gu
