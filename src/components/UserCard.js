import React from "react";

const UserCard = ({user, pic, name, uid, bio}) => {
    return (
        <div className="card">
         
            <img src={pic} alt="user"/>
            <p className="name">Name: {user}</p>
            <p className="name">Bio: {bio}</p>
          
        </div>
    )
}

export default UserCard;