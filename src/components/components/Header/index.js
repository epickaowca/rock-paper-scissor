import React from 'react'
import styled from 'styled-components'
import Score from './Score'
const HeaderElem = styled.header`
    width: 100%;
    border: 2px solid ${p=>p.theme.color3};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 20px;
    & > div{
        &:nth-child(1){
            font-size: 1.4rem;
            line-height: 20px;
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
            &:nth-child(1){
                font-size: 1.8rem;
                line-height: 25px;
            }
        }
    }
`

const Header = ()=> {
    return (
        <HeaderElem>
            <div>
                <p>rock</p>
                <p>paper</p>
                <p>scissors</p>
            </div>
            <Score />
        </HeaderElem>
    )
}

export default React.memo(Header)