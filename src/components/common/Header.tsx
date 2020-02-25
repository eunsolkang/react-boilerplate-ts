import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import {Link} from 'react-router-dom';
import { Dropdown, Icon } from 'semantic-ui-react'

const HeaderBlock = styled.div`
    position : fixed;
    width: 100%;
    z-index : 100;
    box-shadow : 0px 2px 4px rgba(0, 0, 0, 0.08);
    background : white;
`;

const Wrapper = styled(Responsive)`
    height: 4rem;
    display : flex;

    flex-direction: row;
    align-items: center;
    justify-content : space-between;
    .logo{
        font-size : 1.125rem;
        font-weight : 800;
        letter-spacing : 2px;
    }
    .right{
        display : flex;
        align-items : center;

    }
`
const Spacer = styled.div`
    height : 4rem;
`
function Header() {

    return (
        <>
        <HeaderBlock>
            <Wrapper>
                <Link className="logo" to="/"></Link>
            </Wrapper>
        </HeaderBlock>
        <Spacer/>
        </>
    )
}

export default Header;
