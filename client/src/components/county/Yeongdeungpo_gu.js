import React from 'react'
import YeongdeungpoMap from '../Map/YeongdeungpoMap'
import YeongdeungpoTable from '../Seoulmap/CountySafehouseTable/YeongdeungpoTable'
import YeongdeungpoRoadTable from '../Seoulmap/CountySafeRoadTable/YeongdeungpoRoadTable'

const Yeongdeungpo_gu = () => {
    return (
        <div>
            <YeongdeungpoMap />
            <YeongdeungpoTable />
            <YeongdeungpoRoadTable />
        </div>
    )
}

export default Yeongdeungpo_gu
