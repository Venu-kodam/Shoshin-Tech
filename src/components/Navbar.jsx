import React from 'react'
import notification from '../assets/notification.png'
import message from '../assets/message.png'
import profile from '../assets/profile.png'
const Navbar = () => {
    return (
        <>
            <div className='pt-3 d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <span><i className='fa-solid fa-bars cursor fs-3 d-sm-inline me-4 d-xl-none'></i></span>
                    <div className="searchbox p-2 d-flex align-items-center justify-content-between" style={{ background: '#fafafa', borderRadius: '5px', border: '1px solid #e0e0e0' }}>
                        <input className='bg-transparent px-2' type="text " placeholder='Search' style={{ border: 'none', outline: 'none' }} />
                        <span><i className='fa-solid fa-magnifying-glass cursor me-2 fs-5'></i></span>
                    </div>
                </div>
                <div className="nav-right d-flex align-items-center gap-3">
                    <img src={notification} width={30} height={30} alt="" className='cursor' />
                    <img src={message} width={30} height={30} alt="" className='cursor' />
                    <img src={profile} width={45} height={45} alt="" className='cursor' />
                    <span className="name cursor" style={{ color: '#161e54', fontWeight: '500' }} >
                        Admirra John
                        <i className="fa-solid fa-angle-down ps-2" style={{ color: '#737898' }}></i>
                    </span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Navbar