import React from 'react'
import styled from 'styled-components'

const ButtonElem = styled.button`
    border: 1px solid white;
    border-radius: 5px;
    text-transform: uppercase;
    background: transparent;
    color: white;
    padding: 15px 45px;
    cursor: pointer;
    font-size: 1rem;
    outline: none;
    &:hover{
        opacity: .8;
    }
`

export default function Button({children, clickFunc}) {
    return (
        <ButtonElem onClick={clickFunc}>
           {children}
        </ButtonElem>
    )
}
