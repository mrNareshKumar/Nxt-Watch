import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.div`
  display: flex;
`
export const LeftSideBarDesktopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 90%;
  position: fixed;
  margin-top: 60px;
`
export const SideBarOptions = styled.ul`
  display: flex
  flex-direction: column;
  flex-grow: 1;
  padding: 0px;
`
export const SideBarLink = styled(Link)`
  text-decoration: none;
`
export const SideBarOption = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  background-color: ${props => props.active};
`
export const OptionText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => props.color};
  padding-left: 15px;
  margin: 10px;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  padding-left: 15px;
`
export const ContactHeading = styled.h1`
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
`
export const ContactImages = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`
export const ContactImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-bottom: 5px;
`
export const ContactNote = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`
export const DownBarMobileContainer = styled.div`
  @media screen and (min-width: 767px) {
    display: none;
  }
`
