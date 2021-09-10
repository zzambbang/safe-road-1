import React from 'react'
import GangseoMap from '../Map/GangseoMap'
import Ready from '../../images/ready2.png'

const Gangseo_gu = () => {
    return (
        <div>
            <GangseoMap />
            <img alt='Ready' className='Ready' src={Ready} />
        </div>
    )
}

export default Gangseo_gu