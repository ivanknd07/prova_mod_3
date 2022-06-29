import React, {createContext, useReducer} from 'react'
import RemoverLivros from '../RemoverLivros'
const initialState = {RemoverLivros}
const LivrosContext = createContext({})


export const LivrosProvider = props => {

    function reducer(state, action){
        console.warn(action)
        if(action.type == 'deleteLivro'){
            const livro = action.payload
            return{
                //...state,
                RemoverLivros: state.RemoverLivros.filter(lv => lv.author !== livro.author)
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState )

    return (
        <LivrosContext.Provider value={{state, dispatch }}>
            {props.children}
        </LivrosContext.Provider>
    )
}

export default LivrosContext