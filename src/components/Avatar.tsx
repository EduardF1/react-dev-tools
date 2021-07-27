import React from "react";

function Avatar(props:any){
    return (
        <img className="circle-img" src={props.imgURL} alt="avatar_img"/>
    );
}

export default Avatar;