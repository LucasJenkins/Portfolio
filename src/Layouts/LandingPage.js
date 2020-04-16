import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar'


 function LandingPage(){
    
    const Button = styled.button`
        font-size: 1em;
        margin: 2em;
        padding: 0.50em 2em;
        border: 3px solid #17143A;
        border-radius: 3px;
        background: white;
        color: #17143A;
    `
    const SideBar = styled.div`
       
    `
    const Content = styled.div`
        display: flex;
        text-align: center;
        justify-content: center;
        align-content: center;
        
    `
    const SiteMap = styled.div`
        background: #17143A;
        
    `
    const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-column-gap: 1em;
        margin-top: 55px
        
     `
    const OuterWrapper = styled.div`
        display: grid;
        grid-template-rows: 1fr ; 
        grid-row-gap: 1em;
        ${NavBar}{
            position: fixed;
        }
    `
     return(
         <OuterWrapper>
            <NavBar/>
            <Wrapper>
                <SideBar/>
                <Content>

                    <div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        </p>
                        <br/>
                        <br/>
                        <Button>
                            Explore
                        </Button>
                        <Button>
                            Sign Up
                        </Button>
                    </div>
                    
                </Content>
                <SideBar/>
            </Wrapper>
  
         </OuterWrapper>

     )
 }
 export default LandingPage;