import React from 'react'

const Button = (props) => {
    const btn = {
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        color: props.color,
        font: props.font,
        border: props.border,
        marginTop: props.marginTop,
        logo: props.logo,
        marginLeft: props.marginLeft,
        fontWeight: props.fontWeight,

        // title: props.title,
    }
    return (
        <div>
           <button style={btn}> 
           <span>{props.logo}</span>
        {props.title}
     
            </button> 
        </div>
    )
}

export default Button
