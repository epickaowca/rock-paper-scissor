import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Hand from '../../elements/hand'
import { useSelector, useDispatch } from 'react-redux'
import gsap from 'gsap'
import Button  from '../../elements/button.js'
import { chooseHand, duel, scoreStandard } from '../../../redux/ducks/game'
const Wrapper = styled.div`
padding: 10px;
margin-top: 30px;
& > div{
    margin: auto;
    position: relative;
    max-width: 305px;
    height: 277px;
    display: flex;
    justify-content: space-between;
    & > div{
        position: relative;
        &:nth-child(2){
            & > div{
                &:nth-child(1){
                    opacity: 0;
                }
            }
        }
        //comunicat && play again
        &:nth-child(3){
            visibility: hidden;
            opacity: 0;            
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -40px;
            text-align: center;
            & > h2{
                margin-bottom: 15px;
                font-size: 3rem;
                white-space: nowrap;
                color: white;
            }
            ${p=>p.theme.media.special2}{
                bottom: unset;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        & > div{
            &:nth-child(1){
                position: absolute;
                top: 0px;
                left: 50%;
                transform: translateX(-50%);
            }
            &:nth-child(2){
                border-radius: 50%;
                top: -10px;
                left: 50%;
                transform: translateX(-50%);
                position: absolute;
                width: 110.5px;
                height: 110.5px;
                background: rgba(0,0,0,.5);
            }
        }
        & > p{
            color: white;
            margin-top: 150px;
            width: 122px;
            text-align: center;
        }
    }
}
${p=>p.theme.media.desktop1}{
    padding: 50px;
    margin-top: 140px;
    & > div{
        max-width: 450px;
        & > div{
            & > div{
                &:nth-child(1){
                }
                &:nth-child(2){
                    top: -20px;
                    width: 221px;
                    height: 221px;
                }
            }
            & > p{
                margin-top: 270px;
            }
        }
    }
}
`

let randomHand
export default React.memo(()=> {
    const dispatch = useDispatch()
    const comunicat =  useRef(null)
    const mainWrapper =  useRef(null)
    const housePick =  useRef(null)
    const playerPick =  useRef(null)
    const choosenHand = useSelector(state=>state.game.chosenHand)
    const gameMode = useSelector(state=>state.game.mode)
    const duelState = useSelector(state=>state.game.duel)
    let handHelper
    if(gameMode==='standard'){
        handHelper = 3
    }else{
        handHelper = 5
    }
    
    let winner
    
    useEffect(()=>{
        if(choosenHand && duelState){
            let choosenHandHelper = choosenHand===3 ? 0 : choosenHand
            winner = choosenHand===randomHand ? 'draw' : choosenHandHelper+1===randomHand ? 'you win' : 'you lose'
            comunicat.current.children[0].innerHTML = winner
        }
    }, [choosenHand])
    
    
    useEffect(()=>{
        randomHand = Math.floor(Math.random() * handHelper) + 1;
        if(duelState===true){
            if(choosenHand !== ""){
                let winners = []
                if(winner==='draw'){
                    winners.push(playerPick.current.children[0].children[0], housePick.current.children[0].children[0])
                }else if(winner === 'you win'){
                    winners.push(playerPick.current.children[0].children[0])
                }else if(winner === 'you lose'){
                    winners.push(housePick.current.children[0].children[0])
                }
    
                let randomDelay = Math.floor(Math.random() * 3) + 1
                let tl = gsap.timeline()
                tl.to(mainWrapper.current, {duration: .5, maxWidth: '800px', delay: randomDelay})
                .to(housePick.current.children[0], {duration: .5, opacity: 1})
                .to(winners, {boxShadow: '0px 0px 0px 70px rgba(255,255,255,.1), 0px 0px 0px 130px rgba(255,255,255,.05), 0px 0px 0px 170px rgba(255,255,255,.01)'})
                .to(comunicat.current, {duration: .3, autoAlpha: 1, onComplete:()=>{
                    let operationHelepr = winner==='you win' ? 'plus' : winner==='you lose' ? 'minus' : 'draw'
                    dispatch(scoreStandard(operationHelepr))
                }})
            }
        }else if(duelState===false){
            setTimeout(()=>{
                comunicat.current.attributeStyleMap.clear()
                mainWrapper.current.attributeStyleMap.clear()
                playerPick.current.children[0].children[0].attributeStyleMap.clear()
                housePick.current.children[0].children[0].attributeStyleMap.clear()
                housePick.current.children[0].attributeStyleMap.clear()
            }, 500)
        }
    }, [choosenHand, duelState])
    
   

    return (
        <Wrapper>
            <div ref={mainWrapper}>
                <div ref={playerPick}>
                    {choosenHand && <Hand hand={choosenHand} />}
                    <div></div>
                    <p>you picked</p>
                </div>
                <div ref={housePick}>
                    {choosenHand && <Hand hand={randomHand} />}
                    <div></div>
                    <p>the house picked</p>
                </div>
                <div ref={comunicat}>
                    <h2>you lose</h2>
                    <Button case2 clickFunc={()=>dispatch(duel(false))}>play again</Button>
                </div>
            </div>
        </Wrapper>
    )
})
