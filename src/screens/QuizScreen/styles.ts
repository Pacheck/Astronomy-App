import styled from 'styled-components/native';

interface BGCOLOR {
    bgColor: string;
}

interface Cuck {
    isSelected: any;
}

export const QuestionList = styled.FlatList`
    width: 100%;
`

export const Description = styled.Text`
    color: #1b1c1c;
    font-size: 18px;
    margin-top: 5px;
    text-align: center;
    height: 70px;
`

export const QuestionImage =  styled.Image`
    align-self: center;
    width: 350px;
    height: 300px;
    border-radius: 5px;
`

export const Answer = styled.Text`
    padding: 4px;
`

export const Container = styled.View`
    justify-content: space-between;
`;

export const AlternativeButton = styled.TouchableOpacity<Cuck>`
    padding: 5px 10px;
    margin-bottom: 1px;
    width: 85%;
    align-self: center;
    background-color: ${props => props.isSelected ? '#22bd34' : '#e1e3e6'};
`

export const NextBackButton = styled.TouchableOpacity<BGCOLOR>`
    padding: 15px 15px 10px 15px;
    margin: 0 1px;
    align-items: center;
    background-color: ${props => props.bgColor};
    flex: 1;
    border-radius: 2px;
`

export const NavButtons = styled.View`
    margin-top: 2px;
    align-self: center;
    flex-direction: row;
`