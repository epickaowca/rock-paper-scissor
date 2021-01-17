import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
const Wrapper = styled.div`
    background: white;
    padding: 10px 35px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > p{
        &:nth-child(1){
            color: ${p=>p.theme.color2};
            font-size: .9rem;
        }
        &:nth-child(2){
            color: ${p=>p.theme.color1};
            font-size: 3rem;
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > p{
            &:nth-child(1){
                font-size: 1rem;
            }
            &:nth-child(2){
                font-size: 3.5rem;
            }
        }
    }
`

export default function Score() {
    const gameMode = useSelector(state => state.game.mode)
    let scoreHelper = gameMode === 'standard' ? 'scoreStandard' : 'scoreExtended' 
    const score = useSelector(state => state.game[scoreHelper])
    return (
        <Wrapper>
            <p>score</p>
            <p>{score}</p>
        </Wrapper>
    )
}
