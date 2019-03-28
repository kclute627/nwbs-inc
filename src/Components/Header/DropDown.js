import React from 'react';




const DropDown = (props)=>{

    console.log(props.text)

    const text = props.text.map(cur=>{
        return(
            <li className="dropdown-item"><a href="#">{cur}</a></li>
            
            
        )
    })

    return(
        <ul className="dropdown">
            {text}           
        </ul>
    )
}



export default DropDown; 