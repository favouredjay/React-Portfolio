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

        // title: props.title,
    }
    return (
        <div>
           <button style={btn}> 
        {props.title}
            </button> 
        </div>
    )
}

export default Button
