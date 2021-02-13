import styled from 'styled-components/native';

interface CorrectAnswerProps {
    color: string;
}

export const Container = styled.View`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;

export const ContainerText = styled.Text`
    color: #000;
    font-size: 25px;
    align-content: center;
    margin-bottom: 50px;
`

export const HomeButton = styled.TouchableOpacity`
    width: 100%;
    padding: 30px 0;
    align-items: center;
    background-color: #30afe6;
    position: absolute;
    bottom: 0;
`

export const TextButton = styled.Text`
    font-size: 20px;
`

export const CorrectAnswerText = styled.Text<CorrectAnswerProps>`
    color: ${props => props.color};
`