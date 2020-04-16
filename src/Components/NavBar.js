import React from 'react'
import styled from 'styled-components'
import logo from '../logo.png'

function NavBar(props){

    const Item = styled.li`
        float: right
    `
    const Logo = styled.img`
        height: auto;
        width: auto;
        max-height: 50px;
        max-width: 250px;
    `
    const Button = styled.button`
        font-size: 1em;
        margin: 0.75em;
        padding: 0.25em 1em;
        border: 2px solid white;
        border-radius: 3px;
        background: #17143A;
        color: white;
    `
    const List = styled.ul`
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #17143A;
        display:flex;
        flex:1;
    `
    const List2 = styled(List)`
        position: absolute;
        top: 0px;
        right: 0px;
    `
    const NavBar = styled.div`
        background: #17143A;
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
x
    `

    const Text = styled.a`
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    `

    return(
            <NavBar>
                <List>
                    <Item><Logo src = {logo} alt ="logo"/></Item>
                    <Item><Text href = 'Google'>Home</Text></Item>
                    <Item><Text href = 'Google'>Projects</Text></Item>
                    <Item><Text href = 'Google'>Experience</Text></Item>
                    <Item><Text href = 'Google'>Contact</Text></Item>
                    <Item><Text href = 'Google'>About</Text></Item>
                </List>
                <List2>
                    {/* <Item><Text href = 'Google'>    </Text></Item>
                    <Item><Text href = 'Google'>    </Text></Item>
                    <Item><Text href = 'Google'>    </Text></Item> */}
                    <Item><Button href = 'Google'>Login</Button></Item>
                    
                </List2>
            </NavBar>   
    )
}
export default NavBar;