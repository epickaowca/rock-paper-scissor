const GAME_START = 'filter/game_start'
const RULES_VISIBLE = 'filter/rules_visible'

const initState = {
    mode: '',
    rules: false,
}

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case RULES_VISIBLE:
        return{
            ...state, rules: payload
        }
        case GAME_START: return{
            ...state, mode: payload
        }
        default: return state
    }
}

export const gameStart = (payload)=>({type:GAME_START, payload})

export const rulesVisible = (payload)=>{
    console.log('dziualam')
    
    return{
        type:RULES_VISIBLE, payload
    }
}    

export default reducer