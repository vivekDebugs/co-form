import React from 'react'
import './Info.css'

const MailInfo = ({ mail }) => {
    return (
        <div className='mailInfo'>
           <p>Mail forwarded to {mail}</p> 
        </div>
    )
}

export default MailInfo
