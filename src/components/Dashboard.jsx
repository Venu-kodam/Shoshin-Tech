import React from 'react'
import Announcements from './Announcements'

const Dashboard = () => {
    const dashboard_item_data = [
        { title: 'Total Employees', count: 216, men: '120', women: '96', src: "graph1" },
        { title: 'Talent Request', count: 16, men: '6', women: '10', src: "graph2" },
    ]
    const announcements_data = [
        { text: 'Outing Schedule for every department', time: '5 Minutes ago', icon1: 'pin',unpinned:'unpinned', icon2: '3dots' },
        { text: 'Meeting HR Department', time: 'Yesterday 12:30 PM', icon1: 'pin',unpinned:'unpinned', icon2: '3dots' },
        { text: `IT Department need two more talents for UX/UI Designer Position`,unpinned:'unpinned', time: 'Yesterday 09:15 AM', icon1: 'pin', icon2: '3dots' }
    ]
    return (
        <div className='dashboard'>
            <h4 className='' style={{ color: '#161e54' }}>Dashboard</h4>
            <div className='row'>
                <div className="dashboard-left col-md-12 col-xl-6">
                    <div className='row  align-items-center gx-2 gap-2'>
                        <div className='dashboard-item px-3 py-2 col-md' style={{ background: '#FFEFE7', borderRadius: '10px' }}>
                            <h6>Available Position</h6>
                            <h2>24</h2>
                            <p className='mb-0' style={{ color: '#FF5151' }}>4 Urgently needed</p>
                        </div>
                        <div className='dashboard-item px-3 py-2 col-md' style={{ background: '#E8F0FB', borderRadius: '10px' }}>
                            <h6>Job Open</h6>
                            <h2>10</h2>
                            <p className='mb-0' style={{ color: '#3786F1' }}>4 Active hiring</p>
                        </div>
                        <div className='dashboard-item px-3 py-2 col-md' style={{ background: '#FDEBF9', borderRadius: '10px' }}>
                            <h6>New Employees</h6>
                            <h2>24</h2>
                            <p className='mb-0' style={{ color: '#EE61CF' }}>4 Department</p>
                        </div>
                    </div>
                    <div className="graphs-section row align-items-center my-3">
                        {dashboard_item_data.map((item, index) => (
                            <div key={index} className="graph-item row align-items-center  py-2 col-md-5 px-2" style={{ border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                                <div className='col-md-6 col-lg-6'>
                                    <h6 style={{ color: '#161E54' }}>{item.title}</h6>
                                    <h1 style={{ color: '#161E54' }}>{item.count}</h1>
                                    <p className='mb-0' style={{ color: '#686868', fontSize: '12px' }}>{item.men} Men</p>
                                    <p className='mb-0' style={{ color: '#686868', fontSize: '12px' }}>{item.women} Women</p>
                                </div>
                                <div className='col-md-6 col-lg-6'>
                                    <img src={`./src/assets/${item.src}.png`} width={110} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="announcements " style={{ border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                        <div className='px-3 pt-3'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5 style={{ color: '#161e54', fontSize: '18px' }}>Announcement</h5>
                                <span className='px-2' style={{ fontSize: '12px', border: '1px solid #efefef' }}>Today 13 Sep 2023 <i className="fa-solid fa-angle-down ps-2" style={{ color: '#737898' }}></i></span>
                            </div>
                            {announcements_data.map((item, index) => (
                                <div key={index}>
                                    <Announcements text={item.text} time={item.time} icon1={item.icon1} icon2={item.icon2} unpinned={item.unpinned}/>
                                </div>
                            ))}
                        </div>
                        <hr className='my-0' />
                        <h6 className='text-center' style={{ color: '#FF5151' }}>See All Announcements</h6>
                    </div>
                </div>
                <div className="dashboard-right my-2 col-md-12 col-xl-6 row gx-2" >
                    <div className='recent-activity col-md mx-3 col-xl-12' style={{ background: '#161e54' }}>
                        <div className='fs-5' style={{ background: '#1B204A', borderRadius: '10px', padding: '10px 20px' }}>
                            Recent Activity
                        </div>
                        <div style={{ padding: '23px 20px' }}>
                            <div>
                                <p className='mb-1' style={{ fontSize: '10px', color: '#fafafa' }}>10:40 AM Fri 10 Sep 2021</p>
                                <h5>You Posted a New Job</h5>
                                <span style={{ color: '#fafafa', fontSize: '14px' }}>Kindly check the requirements and terms of work and make sure everything is right.</span>
                            </div>
                            <div className='row align-items-center justify-content-between gap-3 my-2'>
                                <span className='col-md-12 col-lg-12 col-xl' style={{ color: '#fafafa', fontSize: '14px' }}>Today you makes 12 activity</span>
                                <div className='col-md-12 col-lg-12 col-xl d-flex justify-content-xl-end justify-content-lg-start' >
                                    <button type='button' className='btn btn-primary' style={{ background: '#FF5151', border: 'none', outline: 'none' }}>See All Activity</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-3 col-md mx-3 col-xl-12' style={{ border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                        <div className='px-3 py-2'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <h5 style={{ color: '#161e54', fontSize: '18px' }}>Upcoming Schedule</h5>
                                <span className='px-2' style={{ fontSize: '12px', border: '1px solid #efefef' }}>Today 13 Sep 2023 <i className="fa-solid fa-angle-down ps-2" style={{ color: '#737898' }}></i></span>
                            </div>
                            <p style={{ color: '#686868', fontSize: '12px' }}>Priority</p>
                            <div className="announcement-items d-flex align-items-center justify-content-between my-2 p-2" style={{ background: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
                                <div >
                                    <h6>Review Candidate applications</h6>
                                    <p className='mb-0' style={{ fontSize: '10px' }}>Today 11:30 AM</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="./src/assets/3dots.png" alt="" />
                                </div>
                            </div>
                            <p style={{ color: '#686868', fontSize: '12px' }}>Other</p>
                            <div className="announcement-items d-flex align-items-center justify-content-between my-2 p-2" style={{ background: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
                                <div >
                                    <h6>Interview With Candidates</h6>
                                    <p className='mb-0' style={{ fontSize: '10px' }}>Today 10:30 AM</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="./src/assets/3dots.png" alt="" />
                                </div>
                            </div>
                            <div className="announcement-items d-flex align-items-center justify-content-between my-2 p-2" style={{ background: '#FAFAFA', border: '1px solid #e0e0e0', borderRadius: '5px' }}>
                                <div >
                                    <h6>Short meeting with product designer from IT Department</h6>
                                    <p className='mb-0' style={{ fontSize: '10px' }}>Today 09:15 AM</p>
                                </div>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src="./src/assets/3dots.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <hr className='my-0' />
                        <h6 className='text-center' style={{ color: '#FF5151' }}>Create a new Schedule</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard