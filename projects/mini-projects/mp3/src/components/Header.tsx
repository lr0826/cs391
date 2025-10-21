import styled from 'styled-components';

const HeaderWrap = styled.header`
  background-color: beige;
`
const Title = styled.h1`
  font-size: calc(22px + 1vw);
`

export default function Header(){

    return (
        <>
            <HeaderWrap>
                <Title>Run's Resume</Title>
                <p>An online resume showcasing Run's accomplishments</p>
            </HeaderWrap>
        </>
    )
}