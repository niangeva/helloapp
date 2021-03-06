import React from 'react';
import styled from 'styled-components';
import JournalDesktop from './JournalDesktop'

const DesktopContainer = styled.div`
    @media only screen and (max-width: 699px){
        display: none;
    }
`
    
const MobileContainer = styled.div`
    @media only screen and (min-width: 700px){
        display: none;
    }
`
const Journal = () => {
    return (
        <>
            <DesktopContainer><JournalDesktop/></DesktopContainer>
            <MobileContainer>Mobile</MobileContainer>
        </>
    )
}

export default Journal
