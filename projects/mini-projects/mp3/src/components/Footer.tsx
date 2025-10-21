import styled from 'styled-components'
import { Link } from 'react-router'
const FooterWrap = styled.footer`
  background-color: beige;
    margin-top: auto;
`
export default function Footer(){
    return (
        <>
            <FooterWrap>
                <p>
                    All rights reserved by Run Liu{' '}
                    <Link to="/">Credits</Link>
                </p>
            </FooterWrap>
        </>
    )
}