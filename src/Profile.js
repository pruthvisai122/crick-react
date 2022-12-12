import React from "react";

const Profile = (props) => {
    const {title, thumbnailUrl,url}=props;
    return(
        <div>
            <img src={thumbnailUrl} alt="something"/>
            <h2>{title}</h2>
            <a href={url}> details </a>
        </div>
    );
}

export default Profile;