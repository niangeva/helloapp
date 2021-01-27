import React from 'react';

import ContentConseil from './ContentConseil'
import Header from '../Header';
import Main from '../Wrapper/Main'


import Bases from '../../images/pics/marcelo-rangel-9_XKYqP1xLw-unsplash.jpg';
import Lecheveu from '../../images/pics/curly-hair-1198016.jpg';
import LesTypes from '../../images/pics/joel-muniz-KodMXENNaas-unsplash.jpg';
import Debuter from '../../images/pics/cosmetics.jpg';
import Materiel from '../../images/pics/energy-comb.jpg';
import Coiffures from '../../images/pics/pexels-ezekixl-akinnewu-946240.jpg';
import CouperPointes from '../../images/pics/haircut.jpg';
import Hygiene from '../../images/pics/eat-2834549.jpg';
import Transition from '../../images/pics/women-hair.jpg';
import CuirChevelu from '../../images/pics/element5-digital-WCPg9ROZbM0-unsplash.jpg';
import Colorations from '../../images/pics/emiliano-vittoriosi-s-4maxr-W78-unsplash.jpg';
import Image11 from '../../images/pics/bases-cheveux.jpg';

import  './Conseils.css';

import { Link } from "react-router-dom";



const ConseilsRoute = (props) => {
    const styles = {
        card: {
            objectFit: 'cover',
            width:' 100%',
            height: 'inherit',
            position: 'relative',
            borderRadius: '5% 95% 5% 95% / 77% 21% 79% 23%'
        }
    }
    const conseils = [
        {background: Bases, title: 'Les bases', link: '/Bases', jour:'14', mois:'Janv'},
        {background: Lecheveu, title: 'La science du cheveu', link: '/LeCheveu', jour:'2', mois:'Nov'},
        {background: LesTypes, title: 'Les types de cheveux', link: '/TypesCheveux', jour:'4', mois:'Oct'},
        {background: Debuter, title: 'Débuter une routine', link: '/Debuter', jour:'10', mois:'Sept'},
        {background: Materiel, title: 'Le materiel', link: '/Materiel', jour:'5', mois:'Aout'},
        {background: Coiffures, title: 'Coiffures protectrices', link: '/Coiffures', jour:'23', mois:'Juin'},
        {background: CouperPointes, title: 'Couper les pointes', link: '/Couper', jour:'18', mois:'Mai'},
        {background: Hygiene, title: 'Hygiène de vie', link: '/Hygiene', jour:'30', mois:'Avril'},
        {background: Transition, title: 'Transition ou Big chop', link: '/TransitionBigchop', jour:'30', mois:'Avril'},
        {background: CuirChevelu, title: 'Un cuir chevelu sain', link: '/CuirChevelu', jour:'9', mois:'Mars'},
        {background: Colorations, title: 'Les colorations', link: '/Colorations', jour:'3', mois:'Janv', alt:'<span>Photo by <a href="https://unsplash.com/@emilianovittoriosi?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Emiliano Vittoriosi</a> on <a href="https://unsplash.com/s/photos/hair?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'},
        {background: Image11, title: 'Aimer ses cheveux', link: '/LovinHair', jour:'3', mois:'Janv'},
    ]

    const content = conseils.map((conseil, index) =>{
        return(
            <ContentConseil key={index} background={conseil.background} 
            jour={conseil.jour} mois={conseil.mois}>
               <Link to={conseil.link}>{conseil.title}</Link>
            </ContentConseil>
           
        )
    })
 
    return (

        <div className="">
            <Header title="conseils">In nimia in agitationibus summum species sudant solito longiores.</Header>
            <Main >
                <div className="page-conseils"> 
                
                                
                    <div className="conseils-content article-container">   
                   {content}
                        
                    </div>
                </div>
            </Main>
            <div className="single-conseil-container">
                {props.children}
            </div>
        
    </div>
                    

    )
}

export default ConseilsRoute;
