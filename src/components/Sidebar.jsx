import React from 'react'
import logo from '../assets/logo.png'
import dashboard from "../assets/Dashboard.png"
import user from "../assets/user.png"
import schedule from "../assets/calender.png"
import employee from "../assets/Employee.png"
import department from "../assets/Department.png"
import support from "../assets/Support.png"
import settings from "../assets/settings.png"
const Sidebar = () => {
    const main_menu = [
        { title: 'Dashboard', src: dashboard },
        { title: 'Recruitment', src: user },
        { title: 'Schedule', src: schedule },
        { title: 'Employee', src: employee},
        { title: 'Department', src: department }
    ]
    const other_menu = [
        { title: 'Support', src: support },
        { title: 'Settings', src: settings},
    ]
    return (
        <div className='sidebar'>
            <div className='logo d-flex align-items-center justify-content-center gap-2'>
                <img src={logo} width={40} height={40} alt="" />
                <h2 className='d-md-none d-xl-inline' style={{ color: '#0A337A' }}>Vasitum</h2>
            </div>
            <h6 className='mt-5' style={{ color: '#686868', fontSize: '12px' }}>MAIN MENU</h6>
            {main_menu.map((menu,index) => (
                <div key={index} className='dashboard-icons d-flex align-items-center justify-left gap-3 mt-3'>
                    <div className="icon">
                        <img src={menu.src}  className="cursor" width={30} height={30} alt="" />
                    </div>
                    <div className="icon-text">
                        <span className='d-md-none d-xl-inline' style={{ color: menu.title === "Dashboard" ? '#ff5151' : '#686868', fontSize: '16px' }}>
                            {menu.title}
                        </span>
                    </div>
                </div>
            ))}
            <h6 className='my-4' style={{ color: '#686868', fontSize: '12px' }}>OTHER</h6>
            {other_menu.map((menu,index) => (
                <div key={index} className='dashboard-icons d-flex align-items-center justify-left gap-3 mt-3'>
                    <div className="icon">
                        <img src={menu.src} className="cursor" width={30} height={30} alt="" />
                    </div>
                    <div className="icon-text">
                        <span className='d-md-none d-xl-inline' style={{color: '#686868',fontSize: '16px' }}>
                            {menu.title}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Sidebar