import React from 'react'
import CanvaComponents from '../../Components/DrawingComponents/CanvaComponents'
import SideBar from '../../Components/DrawingComponents/SideBar'
import { HeaderComponents } from '../../Components/DrawingComponents/HeaderComponents'

const Dashboard = () => {
    return (
        <div className='body'>
            <HeaderComponents/>
            <SideBar/>
            <CanvaComponents/>
        </div>
    )
}

export default Dashboard