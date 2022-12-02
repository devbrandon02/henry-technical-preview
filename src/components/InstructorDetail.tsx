import React from 'react'

const InstructorDetail = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div>
        <img width={'50px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" alt="" />
      </div>

      <div>
        <p style={{ fontSize: '13px', fontWeight: 'bold' }}>Brandon Rodriguez</p>
        <p style={{ color: "#bcbcba", fontSize: '12px' }}>Ingeniero en sistemas</p>
      </div>
    </div>
  )
}


export default InstructorDetail
