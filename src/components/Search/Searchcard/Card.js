import React from 'react'
import "./Card.css"
import Image from './banner1.jpg'
const Card = ({path,title,image}) => {
    if(path==null)
    return null;
    let baseImgUrl = '/images/';
  return (
    <>
        <div className="smalldiv">
            <img height="70px" width="140px" src={image ? baseImgUrl + image : 'https://dummyimage.com/100'}/>
            <h1>{title}</h1>
        </div>
    </>
  )
}

export default Card