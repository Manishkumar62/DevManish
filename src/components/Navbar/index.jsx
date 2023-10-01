import React from 'react'
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'
import { DiCssdeck } from "react-icons/di"
import { FaBars } from "react-icons/fa"
import { useTheme } from 'styled-components'
import { Bio } from '../../data/constants'

const Nav = styled.div`
  background-color: ${({theme}) => theme.card_light};
  height:80px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1rem;
  position:sticky;
  top:0;
  z-index: 10;
  @media screen and (max-width:960px){
    transition: 0.8s all ease;
  }
`

const NavContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  height:60px;
  z-index: 1;
  width: 100%;
  padding:0 24px;
  max-width: 1200px;
`

const NavLogo = styled(LinkR)`
  width:80%;
  padding: 0 6px;
  display:flex;
  align-items:center;
  justify-content: start;
  text-decoration: none;
  color:${({theme}) => theme.primary};
  @media screen and (max-width:640px){
    padding:0 0px;
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width:768px){
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    font-size:1.5rem;
    cursor: pointer;
    color: ${({theme}) => theme.text_primary};
  }
`

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width:768px){
    display: none;
  }
`

const NavLink = styled.a`
  color: ${({theme}) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color: ${({theme}) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

const ButtonContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:end;
  width: 80%;
  height:100%;
  padding: 0 6px;
  @media screen and (max-width:768px){
    display: none;
  }
`

const GithubButton = styled.a`
  background-color: transparent;
  color:${({theme}) => theme.primary};
  border: 1.8px solid ${({theme}) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 20px;
  font-size:16px;
  font-weight:500;
  cursor: pointer;
  height: 70%;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
  &:hover{
    background-color: ${({theme}) => theme.primary};
    color: ${({theme}) => theme.white};
  }
  @media screen and (max-width:768px){
    font-size: 14px;
  }
`

const MobileMenu = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  gap:16px;
  position: absolute;
  top:80px;
  right:0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background:${({theme}) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({open})=> (open? 'translateX(0)':'translateX(100%)')};
  border-radius:0 0 20 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  opacity:${({open})=> open?'100%':'0'};
  z-index:${({open})=> open?'1000':'-1000'};
`

const MobileMenuLinks = styled.a`
  color:${({theme}) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover{
    color:${({theme}) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`

const Span = styled.div`
  padding: 0 4px;
  font-size: 18px;
  font-weight: bold;
`

const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
            <DiCssdeck size='3rem' /><Span>DevManish</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={()=>{setOpen(!open)}}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
      {open && 
        <MobileMenu open={open}>
          <MobileMenuLinks href="#about" onClick={()=>setOpen(!open)}>About</MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={()=>setOpen(!open)}>Skills</MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={()=>setOpen(!open)}>Experience</MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={()=>setOpen(!open)}>Projects</MobileMenuLinks>
          <MobileMenuLinks href="#education" onClick={()=>setOpen(!open)}>Education</MobileMenuLinks>
          <GithubButton 
            style={{
              padding: "10px 16px",
              background:`${theme.primary}`,
              color:"white",
              width:"max-content"
            }}
            href={Bio.github}
            target="_blank"
          >Github Profile</GithubButton>
        </MobileMenu>
      }
      </NavContainer>
    </Nav>

  )
}

export default Navbar