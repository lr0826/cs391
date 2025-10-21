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
  width: 80%;
  margin: 23px auto;
    flex-wrap: wrap;
    @media (max-width: 750px){
      flex-direction: row;
      justify-content: center;
      width: 100%;
      gap: 8px;
    }
`

const Item = styled.li`
  padding: 10px;
  margin: 40px;
  border: none;
  background-color: whitesmoke;

  @media (max-width: 750px){
      margin: 0;
      padding: 8px 12px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: calc(2px + 2vw);
  font-weight: 500;
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