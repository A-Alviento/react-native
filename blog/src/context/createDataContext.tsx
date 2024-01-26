import React, { useReducer } from 'react';
import { propTypes } from '../types';

export default function createDataContext<StateType, ActionType>(
    reducer: React.Reducer<StateType, ActionType>,
    actions: { [key: string]: (dispatch: React.Dispatch<ActionType>) => any },
    initialState: any) {
    const Context = React.createContext(initialState);

    const Provider: React.FC<propTypes> = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === { addBlogPost: (dispatch) => { return () => {} } }
        const boundActions: { [key: string]: React.Dispatch<ActionType> } = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return <Context.Provider value={{ state: state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
};
