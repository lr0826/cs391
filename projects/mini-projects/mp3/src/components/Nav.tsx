import styled from 'styled-components';
import {Link} from "react-router";
const NavWrap = styled.nav`
  background-color: lightgrey;
  width: 30%;
  min-height: 60vh;

  @media (max-width: 750px){
    width: 100%;
    min-height: 0;
  }
`

const List = styled.ul`
  text-align: center;
  padding-left: 0;
  list-style: none;
  display: flex;
    flex-direction: column;
  width: 100%;
  margin: 0 auto;
    flex-wrap: wrap;
    @media (max-width: 750px){
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 5px;
        
    }
`

const Item = styled.li`
    display: flex;
    padding: 10px;
  margin: 40px;
  border: none;
  background-color: whitesmoke;
    width: auto;
    align-items: center;

  @media (max-width: 750px){
      margin: 0;
      padding: 5px 6px;
  }
`

const StyledLink = styled(Link)`
    display: inline-flex;
  text-decoration: none;
    text-align: center;
  font-size: calc(0px + 1.5vw);
  font-weight: 500;
    width: 80%;
`
export default function Nav(){

    return (
        <>
            <NavWrap>
                <List>
                    <Item><StyledLink to={`/`} >Home</StyledLink></Item>
                    <Item><StyledLink to={`/education`} >Educations</StyledLink></Item>
                    <Item><StyledLink to={`/employment`} >Employments</StyledLink></Item>
                    <Item><StyledLink to={`/achievements`} >Achievements</StyledLink></Item>
                    <Item><StyledLink to={`/references`} >References</StyledLink></Item>
                    <Item><StyledLink to={`/projects`} >Projects</StyledLink></Item>
                </List>
            </NavWrap>
        </>
    )
}