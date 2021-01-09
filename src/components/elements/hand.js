import React from 'react'
import styled from 'styled-components'
import imgExample from '../../asset/icon-lizard.svg'

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
        background-image: linear-gradient(${p=>p.theme.handsColor.hand1.col1}, ${p=>p.theme.handsColor.hand1.col2});
        box-shadow: 0px 6px 0px 0px ${p=>p.theme.handsColor.hand1.specialCol};
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
${p=>p.theme.media.desktop1}{
    width: 170px;
    height: 170px;
    & > div{
        & > img{
            transform: scale(1.6);
        }
    }
}
`

export default function Hand() {
    return (
        <Wrapper>
            <div>
                <img src={imgExample} alt="handImg" />
            </div>
        </Wrapper>
    )
}
