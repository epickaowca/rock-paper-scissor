import React from 'react'
import styled from 'styled-components'
import Hand from '../../elements/hand'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    margin-top: 140px;
    & > div{
        margin: auto;
        position: relative;
        max-width: 305px;
        height: 277px;
        & > img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        & > div{
            position: absolute;
            &:nth-child(1){
                left: 0px;
                top: -35px;
            }
            &:nth-child(2){
                right: 0px;
                top: -35px;
            }
            &:nth-child(3){
                left: 50%;
                bottom: 0px;
                transform: translateX(-50%);
            }
            ${p=>p.gameMode==='expanded' && `
            &:nth-child(1){
                left: 50%;
                top: -70px;
                transform: translateX(-50%);
            }
            &:nth-child(2){
                right: -55px;
                top: 35%;
                transform: translateY(-50%);
            }
            &:nth-child(3){
                left: unset;
                right: 0px;
                bottom: -50px;
                transform: unset;
            }
            &:nth-child(4){
                left: 0px;
                bottom: -50px;
            }
            &:nth-child(5){
                left: -55px;
                top: 35%;
                transform: translateY(-50%);
            }
            `}
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
            max-width: 457.5px;
            height: 415.5px;
            & > img{
                transform: translate(-50%, -50%) scale(1.5);
            }
        }
        
    }
    ${p=>p.theme.media.desktop2}{
        & > div{
            max-width: 610px;
            height: 554px;
            & > img{
                transform: translate(-50%, -50%) scale(2);
            }
        }
    }
`

const ChooseHand = ()=> {
    const gameMode = useSelector(state=>state.game.mode)
    let handsArrHelper = gameMode==='standard' ? 3 : 5;
    let handsArr = Array(handsArrHelper).fill(0).map((e,i)=>i+1)
    let bgImg = gameMode==='standard' ? require('../../../asset/bg-triangle.svg') : require('../../../asset/bg-pentagon.svg')
    return (
        <Wrapper gameMode={gameMode}>
            <div>
                {handsArr.map(e=><Hand key={e} chooseHandClick hand={e} />)}
                <img src={bgImg.default} alt="handImg" />
            </div>
        </Wrapper>
    )
}

export default React.memo(ChooseHand)