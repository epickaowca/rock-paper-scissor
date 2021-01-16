import React from 'react'
import styled from 'styled-components'
import closeIco from '../../../asset/icon-close.svg'
import { useDispatch, useSelector } from 'react-redux'
import { mutateState } from '../../../redux/ducks/game'

const Wrapper = styled.div`
position: absolute;
background: white;
width: 100vw;
height: 100vh;
left: 0px;
top: 0px;
rigth: 0px;
bottom: 0px;
z-index: 14;
display: flex;
justify-content: center;
align-items: center;
    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div{
            padding: 20px;
            display: flex;
            justify-content: center;
            width: 100%;
            & > p{
                font-size: 2rem;
                color: ${p=>p.theme.color1};
            }
            & > img{
                cursor: pointer;
                display: none;
            }
        }
        & > img{
            &:nth-child(2){
                margin: 50px 0px;
            }
            &:nth-child(3){
                cursor: pointer;
                margin-top: 20px;
            }
        }
        
    }
    ${p=>p.theme.media.special1}{
        background: rgba(0,0,0,.5);
        & > div{
            background: white;
            width: 500px;
            height: 500px;
            padding: 20px 30px;
            border-radius: 30px;
            & > div{
                justify-content: space-between;
                align-items: center;
                & > img{
                    display: block;
                }
            }
            & > img{
                &:nth-child(3){
                    display: none;
                }
            }
            
        }
    }
`
export default function Rules() {
    const dispatch = useDispatch()
    const gameMode = useSelector(state=>state.game.mode)
    let imgRules = gameMode==='standard' ? require('../../../asset/image-rules.svg') : require('../../../asset/image-rules-bonus.svg')
    return (
        <Wrapper onClick={()=>dispatch(mutateState({name: 'rules', value: false}))}>
            <div>
                <div>
                    <p>rules</p>
                    <img src={closeIco} />
                </div>
                <img alt="rules" src={imgRules.default} alt="rules" />
                <img alt="exitRules" src={closeIco} />
            </div>
        </Wrapper>
    )
}
