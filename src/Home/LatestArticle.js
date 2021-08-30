import React from 'react'


const LatestArticle = (props) => {
    
    
    return (
        <div>
            
           <p className="name-style"><span>{props.logo}</span>{props.title}</p>
            <p className = "date-style">{props.date}</p>
            
        </div>
    )
}

export default LatestArticle
