import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../components/elements/button'
import Header from '../components/components/Header'
import ChooseHand from '../components/components/ChooseHand'
import Rules from '../components/components/Rules'
import Duel from '../components/components/Duel'
import { useSelector, useDispatch } from 'react-redux'
import { rulesVisible } from '../redux/ducks/game'
import gsap from 'gsap'
const Wrapper = styled.div`
    max-width: 450px;
    padding: 20px;
    margin: auto;
    display: flex;
    flex-direction: column;
    & > button{
        margin: auto;
        margin-top: 155px;
    }
    & > div{
        &:nth-child(3){
            display: none;
            opacity: 0;
            visibility: visible;
        }
    }
    ${p=>p.theme.media.desktop1}{
        max-width: 1024px;
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
    const mainWrapper = useRef(null)
    const dispatch = useDispatch()
    const rulesVisibleState = useSelector(state=>state.game.rules)
    const duel = useSelector(state=>state.game.duel)
    useEffect(()=>{
        const refHelper = mainWrapper.current.children
        const chooseHandDiv = refHelper[1]
        const duelDiv = refHelper[2]
        if(duel===true){
            let tl = gsap.timeline()
            tl.to(chooseHandDiv, {duration: .3, autoAlpha: 0})
            .set(chooseHandDiv, {display: 'none'})
            .set(duelDiv, {display: 'block'})
            .to(duelDiv, {duration: .3, autoAlpha: 1})
        }else if(duel===false){
            let tl = gsap.timeline()
            tl.to(duelDiv, {duration: .3, autoAlpha: 0})
            .set(duelDiv, {display: 'none'})
            .set(chooseHandDiv, {display: 'block'})
            .to(chooseHandDiv, {duration: .3, autoAlpha: 1})
        }
    },[duel])



    
    return (
        <Wrapper ref={mainWrapper}>
            <Header />
            <ChooseHand />
            <Duel />
            <Button clickFunc={()=>dispatch(rulesVisible(true))}>rules</Button>
            {rulesVisibleState && <Rules></Rules>}
        </Wrapper>
    )
}
