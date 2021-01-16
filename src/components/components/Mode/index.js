import React from 'react'
import Button from '../../elements/button'
import styled from 'styled-components'
import { mutateState } from '../../../redux/ducks/game'
import { useDispatch } from 'react-redux'
const Wrapper = styled.div`
    padding-top: 150px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > h1{
        text-align: center;
        color: white;
    }
    & > div{
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: 40px;
        & > button{
            margin-top: 20px;
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
            flex-direction: row;
            & > button{
                margin 0px 20px;
            }
        }
    }
`

export default function Mode() {
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <h1>select a mode:</h1>
            <div>
                <Button clickFunc={()=>dispatch(mutateState({name: 'mode', value:'standard'}))}>standard</Button>
                <Button clickFunc={()=>dispatch(mutateState({name: 'mode', value:'expanded'}))}>expanded</Button>
            </div>
        </Wrapper>
    )
}
