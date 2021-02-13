
interface IState {
    questionID: number;
    id: string;
    answer: string;
    correct: boolean;
}

interface ActionType {
    type: 'CHANGE';
    payload: { 
        questionID: number;
        id: string;
        answer: string;
    };
}

const initialState = <Array<IState>>[{ answer: 'initial', id: '0', questionID: 0, correct: false}];

const reducer = (state = initialState, action: ActionType ) => {

    switch(action.type){
        case 'CHANGE':
            const arr = state.filter(res => res.questionID !== action.payload.questionID);
            return [...arr, action.payload]; //poder do 40hz
        default:
            return state;
    }
}

export default reducer;