import React from 'react';
import {NavigationScreenProp} from 'react-navigation';

import {useSelector} from 'react-redux';
import {RootReducer} from '../../redux/store';
import {TextButton} from '../HomeScreen/styles';

import {
  Container,
  ContainerText,
  CorrectAnswerText,
  HomeButton,
} from './styles';

interface IState {
  id: string;
  questionID: number;
  answer: string;
  correct: boolean;
}

interface NAV {
  navigation: NavigationScreenProp<any>;
}

const ResultScreen: React.FC<NAV> = ({navigation}) => {
  const answers = useSelector(
    (state: RootReducer) => state.defaultReducer as Array<IState>,
  );

  let correctAnswers = answers
    .map((a) => (a.correct ? 1 : 0))
    .reduce(function (a: any, b: any) {
      return a + b;
    });

  return (
    <Container>
      <ContainerText>
        Você acertou{' '}
        <CorrectAnswerText color={correctAnswers > 5 ? 'green' : 'red'}>
          {correctAnswers}
        </CorrectAnswerText>{' '}
        de 15 questões
      </ContainerText>
      <HomeButton onPress={() => navigation.navigate('Home')}>
        <TextButton>Play Again</TextButton>
      </HomeButton>
    </Container>
  );
};

export default ResultScreen;
