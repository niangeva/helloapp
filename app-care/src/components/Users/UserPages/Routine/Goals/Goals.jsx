import React from 'react'
import styled from 'styled-components'
import { FaPen, FaPlusCircle, FaTrashAlt } from "react-icons/fa";


const GoalsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 45px;
`
const GoalsHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
`
const TitleSection =styled.div`
    text-transform: uppercase;
    letter-spacing: 8px;
    font-size: 30px;
`
const AddGoalButton = styled.div`
    text-transform: uppercase;
    display: flex;
    align-items: center;
`

const GoalRow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-bottom: 45px;
    :last-child{
        margin-bottom: 0;
    }
`

const Name = styled.div`
    text-transform: uppercase;
`

const Action = styled.div`
    display: flex;
    align-items: center;
`

const Goals = () => {
    const AllGoals = [
        {id: 0, name: "Lose weight"},
        {id: 1, name: "goal 1"},
        {id: 2, name: "goal 2"},
        {id: 3, name: "goal 3"},
        {id: 4, name: "goal 4"},

    ]
    return (
       <GoalsContainer>
           <GoalsHeader>
               <TitleSection>goals</TitleSection>
               <AddGoalButton><FaPlusCircle/></AddGoalButton>
                
           </GoalsHeader>
           {AllGoals.map((goal, index) =>(
                    <GoalRow key={`goal-number` + index}>
                        <Name>{goal.name} </Name>
                        <Action> <FaPen/> <FaTrashAlt/></Action>
                    </GoalRow>
                ))}
       </GoalsContainer>
    )
}

export default Goals
