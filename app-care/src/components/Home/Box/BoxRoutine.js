import React from 'react';
import {Link} from "react-router-dom";

const BoxRoutine = () => {
    return (
        
                <div className="tabRoutine-content" >
                    <div className="rtab-box">
                        <div className="rtab-box-content">
                            <h2>Routine de soin</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a eleifend ante. </p>
                        </div>
                        
                    </div>
                    <div className="rtab-box">
                        <div className="rtab-box-content">
                            <h2>Evolution</h2> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#CCC" fillOpacity="1" d="M0,96L20,122.7C40,149,80,203,120,202.7C160,203,200,149,240,106.7C280,64,320,32,360,37.3C400,43,440,85,480,122.7C520,160,560,192,600,181.3C640,171,680,117,720,96C760,75,800,85,840,96C880,107,920,117,960,122.7C1000,128,1040,128,1080,128C1120,128,1160,128,1200,117.3C1240,107,1280,85,1320,64C1360,43,1400,21,1420,10.7L1440,0L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">

                                </path>
                            </svg>
                        </div>
                    </div> 
                </div>
                
    )
}

export default BoxRoutine
