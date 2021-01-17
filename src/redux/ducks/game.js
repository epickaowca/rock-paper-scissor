const GAME_START = 'game/game_start'
const CHOOSE_HAND = 'game/choose_hand'
const SCORE_STANDARD = 'game/score_standard'
const MUTATE_STATE = 'game/mutate_state'

let scoreStandardLocalStorage;
let scoreExtendedLocalStorage;
try {
    scoreStandardLocalStorage = localStorage.getItem('scoreStandard');
    scoreExtendedLocalStorage = localStorage.getItem('scoreExtended');
} catch(e) {
    scoreExtendedLocalStorage = 'error';
    scoreStandardLocalStorage = 'error'
}

const initState = {
    mode: '',
    rules: false,
    duel: '',
    chosenHand: '',
    scoreStandard: 0,
    scoreExtended: 0,
}

if(scoreStandardLocalStorage !== ' error' && scoreStandardLocalStorage !== null){
    initState.scoreStandard = scoreStandardLocalStorage
}
if(scoreExtendedLocalStorage !== ' error' && scoreExtendedLocalStorage !== null){
    initState.scoreExtended = scoreExtendedLocalStorage
}


const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case SCORE_STANDARD:

        let scoreStandardHelper = payload.operator === 'plus' ? ++state[payload.name] : payload.operator === 'minus' ? --state[payload.name] : state[payload.name]
        localStorage.setItem(payload.name, scoreStandardHelper);
        
        return{
            ...state, [payload.name]: scoreStandardHelper
        }
        
        case MUTATE_STATE:return{
            ...state, [payload.name]: payload.value
        }

        case GAME_START: return{
            ...state, mode: payload
        }

        case CHOOSE_HAND:return{
            ...state, chosenHand: payload, duel: true
        }
        default: return state
    }
}





export const mutateState = payload=>({type:MUTATE_STATE, payload})

export const scoreStandard = payload=>({type: SCORE_STANDARD, payload})

export const chooseHand = payload=>({type: CHOOSE_HAND, payload})

export const gameStart = payload=>({type:GAME_START, payload})
  

export default reducer