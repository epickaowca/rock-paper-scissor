import React from 'react'
import styled from 'styled-components'
import Button from '../components/elements/button'
import Header from '../components/components/Header'
import ChooseHand from '../components/components/ChooseHand'
import Rules from '../components/components/Rules'
import Duel from '../components/components/Duel'
import { useSelector, useDispatch } from 'react-redux'
import { rulesVisible } from '../redux/ducks/game'
const Wrapper = styled.div`
    max-width: 1024px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    & > button{
        margin: auto;
        margin-top: 155px;
    }
    & > div{
        &:nth-child(2){
            display: none
        }
        &:nth-child(3){
            //dispaly: block;
        }
    }
    ${p=>p.theme.media.desktop2}{
        & > button{
            position: absolute;
            right: 116px;
            bottom: 75.5px;
        }
    }
`

export default function View() {
    const dispatch = useDispatch()
    const rulesVisibleState = useSelector(state=>state.game.rules)
        
    return (
        <Wrapper>
            <Header />
            <ChooseHand />
            <Duel />
            <Button clickFunc={()=>dispatch(rulesVisible(true))}>rules</Button>
            {rulesVisibleState && <Rules></Rules>}
        </Wrapper>
    )
}
