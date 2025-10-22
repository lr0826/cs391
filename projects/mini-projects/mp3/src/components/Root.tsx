import styled from 'styled-components'
import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Home from "./mains/Home.tsx";
import Footer from "./Footer.tsx";
import {Route, Routes} from "react-router";
import Education from "./mains/Education.tsx";
import Employment from "./mains/Employment.tsx";
import Projects from "./mains/Projects.tsx";
import References from "./mains/References.tsx";
import Achievements from "./mains/Achievements.tsx";

const PageWrapper = styled.div`
  width: 60vw;
  min-height: 100vh;
  margin: 0 auto;
    background: floralwhite;
    font-family: 'Poppins', sans-serif;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
    

  @media (max-width: 750px){
    flex-direction: column;
  }
`

const Main = styled.main`
  width: 70%;
  min-height: 100vh;
  padding: 20px 15px;
  margin: 0;
  background: floralwhite;
  border: 1px solid #e5e7eb;

  h2{
    text-align: center;
    margin: 0 0 50px;
    font-size: calc(18px + 0.6vw);
  }
  p{
    max-width: 80ch;
    margin: 10px auto 30px;
    line-height: 1.65;
  }
  img{
    display: block;
    max-width: 420px;
    width: 90%;
    height: auto;
    margin: 8px auto 30px;
  }
  ul{
    max-width: 70ch;
    margin: 12px auto;
    padding-left: 1.2rem;
  }
  li{ margin-bottom: 20px; }
  table{
    max-width: 100%;
    border-collapse: collapse;
    margin: 12px auto;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  }
  th, td{
    text-align: left;
    padding: 10px 12px;
    border-bottom: 1px solid #e5e7eb;
      overflow-wrap: anywhere;
  }

  @media (max-width: 750px){
    width: 100%;
    min-height: 100vh;
  }
`
export default function Root(){
    return(
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/education" element={<Education/>} />
                        <Route path="/employment" element={<Employment/>} />
                        <Route path="/achievements" element={<Achievements />} />
                        <Route path="/references" element={<References />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </Main>
            </Container>
            <Footer />
        </PageWrapper>
    )
}