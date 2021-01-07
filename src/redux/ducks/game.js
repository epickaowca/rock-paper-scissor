const GAME_START = 'filter/game_start'


const initState = {
    mode: '',
}

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case GAME_START: return{
            ...state, mode: payload
        }
        default: return state
    }
}

export const gameStart = (payload)=>({type:GAME_START, payload})

export default reducer