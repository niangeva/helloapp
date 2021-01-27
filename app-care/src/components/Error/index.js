import React from 'react'
import ErrorImg   from '../../images/erreur404.png';
import  "./error.css";
const ErrorPage = () => {
    return (
        <div className="PageError"> 
            <h2>Oupps page que vous tentez d'ouvrir n'existe pas !</h2>
            <img src={ErrorImg} alt=""error page/>
        </div>
    )
}

export default ErrorPage;
