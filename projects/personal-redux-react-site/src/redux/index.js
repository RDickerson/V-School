import {createStore, applyMiddleware} from "redux"
import axios from "axios"
import thunk from "redux-thunk"

//init state
const initState = {
    races: [],
    classes: [],
    spells: []
}
//action

export const getRaces = () => {
    return dispach => {
        axios.get("https://vschool-cors.herokuapp.com?url=http://dnd5eapi.co/api/races").then(res => {
            dispach({
                type: "GET_RACES",
                races: res.data.results
            })
        })
    }
}

export const getClasses = () => {
    return dispach => {
        axios.get("https://vschool-cors.herokuapp.com?url=http://dnd5eapi.co/api/classes").then(res => {
            dispach({
                type: "GET_CLASSES",
                classes: res.data.results
            })
        })
    }
}

export const getSpells = () => {
    return dispatch => {
        axios.get("https://vschool-cors.herokuapp.com?url=http://dnd5eapi.co/api/spells").then(res => {
            dispatch({
                type: "GET_SPELLS",
                allSpells: res.data.results
            })
        })   
    }
}


//reducer
const reducer = (prevState = initState, action) => {
    switch (action.type){
        case "GET_RACES":
            return {...prevState,
                races: action.races
            }
        case "GET_CLASSES": 
            return {...prevState,
                classes: action.classes
            }
        case "GET_SPELLS": 
            return {...prevState,
                spells: action.allSpells
            }
        default:
            return prevState
    }
}
//export

export default createStore(reducer, applyMiddleware(thunk))