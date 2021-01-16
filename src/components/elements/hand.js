import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { chooseHand } from '../../redux/ducks/game'
import { useSelector } from 'react-redux'
const Wrapper = styled.div`
z-index: 2;
width: 85px;
height: 85px;
position: relative;
cursor: pointer;
& > div{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    & > img{
        margin: auto;
        transform: scale(.7);
    }
    &:before,&:after{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '';
        border-radius: 50%;
        z-index: -1;
        position: absolute;
    }
    &:before{
        width: 130%;
        height: 130%;
        background-image: linear-gradient(${p=>p.theme.handsColor[`hand${p.hand}`].col1}, ${p=>p.theme.handsColor[`hand${p.hand}`].col2});
        box-shadow: 0px 6px 0px 0px ${p=>p.theme.handsColor[`hand${p.hand}`].specialCol};
    }
    &:after{
        box-shadow: inset 0px 6px 2px 0px rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        background: white;
    }
}
&:hover{
    opacity: .8;
}
${p=>p.theme.media.desktop1}{
    width: 120px;
    height: 120px;
    & > div{
        & > img{
            transform: scale(1);
        }
    }
}
${p=>p.theme.media.desktop2}{
    width: 150px;
    height: 150px;
    & > div{
        & > img{
            transform: scale(1.4);
        }
    }
}
`

export default function Hand({hand, chooseHandClick}) {
    const gamemode = useSelector(state=>state.game.mode)
    const dispatch = useDispatch()
    let image = require(`../../asset/hand${hand}.svg`)
    const handClickHandler = ()=>{
        if(chooseHandClick){
            dispatch(chooseHand(hand))
        }
    }
    return (
        <Wrapper gamemode={gamemode} hand={hand}>
            <div onClick={handClickHandler}>
                <img src={image.default} alt="handImg" />
            </div>
        </Wrapper>
    )
}
