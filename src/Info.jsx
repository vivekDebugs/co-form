import React from 'react'
import './Info.css'
import MailInfo from './MailInfo'
import { useStateValue } from './StateProvider'

const Info = () => {
    const [{ category, subCategory, impact, urgency, priority, description }] = useStateValue()
    return (
        <div className='info'>
            <div className="info__grid">
                <b>Category</b> <span>{category}</span>
                <b>Subcategory</b> <span>{subCategory}</span> 
                <b>Urgency</b> <span>{urgency}</span> 
                <b>Impact</b> <span>{impact}</span>
                <b>Priority</b> <span>{priority}</span> 
                <b>Description</b> <span>{description}</span>
            </div>
            <div className="info__res">
                {category === 'C1' && <MailInfo mail='one@customer.com' />}
                {category === 'C2' && <MailInfo mail='two@customer.com' />}
                {category === 'C3' && <MailInfo mail='three@customer.com' />}
            </div>
        </div>
    )
}

export default Info