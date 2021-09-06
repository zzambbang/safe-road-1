import React from 'react'
import JongnoMap from '../Map/JongnoMap'
import Ready from '../../images/ready2.png'

const Jongno_gu = () => {
    return (
        <div>
            <JongnoMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Jongno_gu
