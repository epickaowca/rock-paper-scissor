import React from 'react'
import styled from 'styled-components'

const ButtonElem = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    background: ${p=>p.case2 ? 'white' : 'transparent' } ;
    color: ${p=>p.case2 ? p.theme.color1 : 'white'};
    padding: 15px 45px;
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    white-space: nowrap;
    &:hover{
        opacity: .8;
    }
`

export default function Button({children, clickFunc, case2}) {
    return (
        <ButtonElem case2={case2} onClick={clickFunc}>
           {children}
        </ButtonElem>
    )
}
