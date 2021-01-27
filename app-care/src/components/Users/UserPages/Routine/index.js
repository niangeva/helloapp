import React, {useState} from 'react';
import UserPage from '../UserPage'
import HeaderUser from '../HeaderUser';
import { FaPlusCircle } from "react-icons/fa";
import './Routine.css'
import Journal from './Journal';
import Hebdo from './Hebdo';
import Mensuel from './Mensuel';

import { Link } from 'react-router-dom'


const Routine = () => {

    const [stateOnglets, setStateOnglets] = useState(1);

    const stateOnglet = (index) => {
      setStateOnglets(index);
    }
 

    return (
        <UserPage classname="routine">
            <HeaderUser title="Ma routine">
                <ul className="routine-nav">
                    <li onClick={() => stateOnglet(1)} 
                    className={`onglets routine-btn ${stateOnglets === 1 ? 'activeOnglet' : ''}`}>
                        Journal
                    </li>

                    <li onClick={() => stateOnglet(2)} 
                     className={`onglets routine-btn ${stateOnglets === 2 ? 'activeOnglet' : ''}`}>
                         Hebdo
                    </li>

                    <li onClick={() => stateOnglet(3)} 
                    className={`onglets routine-btn ${stateOnglets === 3 ? 'activeOnglet' : ''}`}>
                        Mensuel
                    </li>
                </ul>

            
            </HeaderUser>
                
                <div className="user-main">
                    
                    

                    <div className="routine-container">
            
                        <div className={stateOnglets === 1 ? "routineContent active-routineContent" : "routineContent" }>
                            
                                <Journal/>
                        </div>

                        <div className={stateOnglets === 2 ? "routineContent active-routineContent" : "routineContent" }>
                            <button className='addNew'><Link to="NewRoutine"><FaPlusCircle/></Link></button>
                            <Hebdo/>
                        </div>
                            
                        <div className={stateOnglets === 3 ? "routineContent active-routineContent" : "routineContent" }>
                            <button className='addNew'><Link to="NewRoutine"><FaPlusCircle/></Link></button>
                            <Mensuel/>
                        </div>                                                      
                            
                            
                    </div>
                </div>
            
        </UserPage>
                    
           
    )
}


export default Routine;
