import React from 'react'

const Sidebar = () => {
    const main_menu = [
        { title: 'Dashboard', src: "Dashboard" },
        { title: 'Recruitment', src: "user" },
        { title: 'Schedule', src: "calender" },
        { title: 'Employee', src: "Employee" },
        { title: 'Department', src: "Department" }
    ]
    const other_menu = [
        { title: 'Support', src: "Support" },
        { title: 'Settings', src: "settings" },
    ]
    return (
        <div className='sidebar'>
            <div className='logo d-flex align-items-center justify-content-center gap-2'>
                <img src="./src/assets/logo.png" width={40} height={40} alt="" />
                <h2 className='d-md-none d-xl-inline' style={{ color: '#0A337A' }}>Vasitum</h2>
            </div>
            <h6 className='mt-5' style={{ color: '#686868', fontSize: '12px' }}>MAIN MENU</h6>
            {main_menu.map((menu,index) => (
                <div key={index} className='dashboard-icons d-flex align-items-center justify-left gap-3 mt-3'>
                    <div className="icon">
                        <img src={`./src/assets/${menu.src}.png`}  className="cursor" width={30} height={30} alt="" />
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
                        <img src={`./src/assets/${menu.src}.png`} className="cursor" width={30} height={30} alt="" />
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