import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native';

import {MockQuestions, IQuestion} from '../../mock/Questions';
import { RootReducer } from '../../redux/store'
import {
  Container,
  QuestionList,
  AlternativeButton,
  Description,
  QuestionImage,
  NextBackButton,
  NavButtons,
  Answer,
} from './styles';
import { NavigationScreenProp } from 'react-navigation';


interface IState {
  id: string;
  answer: string;
}

interface NAV {
  navigation: NavigationScreenProp<any>;
}

const QuizScreen: React.FC<NAV> = ({ navigation }) => {
  const [questionID, setQuestionID] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>({
    id: 0,
    alternatives: [],
    description: '',
    image: require('../../../assets/rosquinha1.jpg'),
  });

  const store = useSelector((state: RootReducer) => (state.defaultReducer as Array<IState>));


  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const retrievedData = MockQuestions.filter(
      (data) => data.id === questionID,
    );
    const [{id, description, alternatives, image}] = retrievedData;

    setCurrentQuestion({id, description, alternatives, image});

  }, [questionID]);


  return (
    <Container>
      <QuestionImage source={currentQuestion.image} />

      <Description>{currentQuestion.description}</Description>
      
      <QuestionList
        data={currentQuestion.alternatives}
        keyExtractor={(data: any) => data.answer}
        renderItem={({item}: any) => {
          return (
            <AlternativeButton 
              onPress={
                () => { dispatch({ type: 'CHANGE', payload: { questionID: questionID, id: item.id, answer: item.answer, correct: item.correct } })}
              }
              isSelected={store.find(state => state.id === item.id) ? true : false}
            >
              <Answer>{item.answer}</Answer>
            </AlternativeButton>
          );
        }}
      />

      <NavButtons>
        <NextBackButton 
          onPress={() => setQuestionID(prevState => prevState - 1)} 
          disabled={questionID === 1 ? true : false}
          bgColor="#30afe6"
        >
          <Text>Voltar</Text>
        </NextBackButton>

        {
          questionID !== 15
            ? 
          <NextBackButton 
            onPress={() => setQuestionID(prevState => prevState + 1)} 
            disabled={questionID === 15 ? true : false}
            bgColor="#30afe6"
          >
            <Text>Avançar</Text>
          </NextBackButton> 
            : 
          <NextBackButton
            onPress={() => navigation.navigate('Result') }
            bgColor="#32c235"
          >
            <Text>Finalizar</Text>
          </NextBackButton>
        }
      </NavButtons>
    </Container>
  );
};

export default QuizScreen;
