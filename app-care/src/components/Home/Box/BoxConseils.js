import React from 'react';


import {Link} from "react-router-dom";

const BoxConseils = () => {

    const conseils = [
        {title: 'Les bases', link: '/Bases'},
        {title: 'La science du cheveu', link: '/LeCheveu'},
        {title: 'Les types de cheveux', link: '/TypesCheveux'},
        {title: 'Débuter une routine', link: '/Debuter'},
    ]

    const content = conseils.map((conseil, index) =>{
        return(
            <article key={index} className="post-item">
                <div className="post-entry">
                    <Link to={conseil.link}>
                        <h2>{conseil.title}</h2>
                    </Link>                                                  
                    <Link to="/" className="post-plus">+</Link>
                </div>
                
            </article>
        )
    })

    return (
       
       
                <div className="conseils-content clearfix">
                  {content}
                </div>
    )
}


export default BoxConseils;