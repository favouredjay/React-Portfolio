import React from 'react'
import { GiChewedHeart } from 'react-icons/gi'
import Button from '../../Button';

const Headerr = () => {
    return (
        <div className="whole-container">
            <header className="header-container">

            <div className="header1">
               <h4 className = "heart"> <GiChewedHeart/> </h4>
               <h3>Joy Udom</h3>
                
          </div>

            <div className = "header2">
                <h4>Article</h4>
                <h4>Snippets</h4>
                <h4>About</h4>
                <Button
                width = "80px"
                title = "Contact"
                height = "40px"
                borderMargin = "5px"
                backgroundColor = "#1A2832"
                color = "white"
                font = "bold"
                borderRadius = "5px"
                border = "solid #416883"
                marginTop = "10%"
                />
               
            </div>
            </header>
            

            
        </div>
    )
}

export default Headerr
