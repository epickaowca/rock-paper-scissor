const GAME_START = 'game/game_start'
const RULES_VISIBLE = 'game/rules_visible'
const CHOOSE_HAND = 'game/choose_hand'
const DUEL = 'game/duel'
const SCORE_STANDARD = 'game/score_standard'

const initState = {
    mode: 'standard',
    rules: false,
    duel: '',
    chosenHand: '',
    scoreStandard: 0,
    scoreExtended: 0,
}

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case SCORE_STANDARD:return{
            ...state, scoreStandard: payload === 'plus' ? ++state.scoreStandard : payload === 'minus' ? --state.scoreStandard : state.scoreStandard
        }
        case DUEL:return{
            ...state, duel: payload
        }
        case CHOOSE_HAND:return{
            ...state, chosenHand: payload, duel: true
        }
        case RULES_VISIBLE:return{
            ...state, rules: payload
        }
        case GAME_START: return{
            ...state, mode: payload
        }
        default: return state
    }
}

export const scoreStandard = (payload)=>({type: SCORE_STANDARD, payload})

export const duel = (payload)=>({type: DUEL, payload})

export const chooseHand = (payload)=>({type: CHOOSE_HAND, payload})

export const gameStart = (payload)=>({type:GAME_START, payload})

export const rulesVisible = (payload)=>({type:RULES_VISIBLE, payload})    

export default reducer