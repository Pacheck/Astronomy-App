import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Text } from 'react-native';

import { Container, StartButton, TextButton, TextView } from './styles';

import { NavigationScreenProp } from 'react-navigation';
import { RootReducer } from '../../redux/store';

interface NAV {
  navigation: NavigationScreenProp<any>;
}

const HomeScreen: React.FC<NAV> = ({ navigation }) => {

  const timerReducer = useSelector((state: RootReducer) => state.defaultReducer);

  const dispatch = useDispatch();

  console.log(timerReducer);

  return (
    <Container>
      <TextView>Bem-vindo a tela inicial do Quizz app!</TextView>
      <TextView>O teste de perguntas e resposta será baseado no tema de Astronomia
      O App é composto de 15 perguntas que deverão ser respondidas em até 10 minutos!</TextView>
      
      <TextView>
        Caso não consiga terminar a tempo, será considerada todas as respostas certas até o momento
        Boa sorte!
      </TextView>

      <StartButton onPress={() => {
        navigation.navigate('Quiz'),
        dispatch({ type: 'CLEAR_STATE' })
      }}>
        <TextButton>Iniciar</TextButton>
      </StartButton>
      
    </Container>
  );
};

export default HomeScreen;
