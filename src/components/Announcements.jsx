import React from 'react'
const Announcements = ({ text, time, icon1, icon2,unpin }) => {
    return (
        <div className="announcement-items d-flex align-items-center justify-content-between my-2 p-2" style={{ background: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
            <div >
                <h6>{text}</h6>
                <p className='mb-0' style={{ fontSize: '10px' }}>{time}</p>
            </div>
            <div className='d-flex align-items-center gap-3'>
                <img src={text=="Outing Schedule for every department"?icon1:unpin} className='cursor' alt="" />
                <img src={icon2} className='cursor' alt="" />
            </div>
        </div>
    )
}

export default Announcements