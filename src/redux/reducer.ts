
interface IState {
    questionID: number;
    id: string;
    answer: string;
    correct: boolean;
}

interface ActionType {
    type: 'CHANGE' | 'CLEAR_STATE';
    payload: { 
        questionID: number;
        id: string;
        answer: string;
    };
}

const initialState = <Array<IState>>[{}];

const reducer = (state = initialState, action: ActionType ) => {

    switch(action.type){
        case 'CHANGE':
            const arr = state.filter(res => res.questionID !== action.payload.questionID);
            return [...arr, action.payload]; //poder do 40hz
        case 'CLEAR_STATE':
            return initialState;
        default:
            return state;
    }
}

export default reducer;