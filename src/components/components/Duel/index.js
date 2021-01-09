import React from 'react'
import styled from 'styled-components'
import Hand from '../../elements/hand'

const Wrapper = styled.div`
margin-top: 140px;
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
        }
    }
}
${p=>p.theme.media.desktop1}{
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

export default function Duel() {
    return (
        <Wrapper>
            <div>
                <div>
                    <Hand />
                    <div></div>
                    <p>you picked</p>
                </div>
                <div>
                    <Hand />
                    <div></div>
                    <p>the house picked</p>
                </div>
            </div>
        </Wrapper>
    )
}
