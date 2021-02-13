import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';

import { Container, CounterText } from './styles';
import { NavigationScreenProp } from 'react-navigation';

type Dispatcher = ReturnType<typeof useDispatch>

interface NAV {
  navigation: NavigationScreenProp<any>;
}

interface ICounter {
  ms: number;
  seconds: number;
  minutes: number;
}

const Timer: React.FC<NAV> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(600000);
  const [finalCounter, setFinalCounter] = useState<string>("");

  useEffect(() => {
    let id: any;


    if(counter === 600000){
      setStart(true);
    }

    if(counter <= 0){
      setStart(false);
      navigation.navigate('Result')
    }

    if (start) {
      id = setInterval(() => {
        setCounter(counter - 1000);
      }, 1000);
    }    

    var result = `${Math.floor(counter/(1000*60))%60} : ${(Math.floor(counter/1000)%60) < 10 ? '0' + (Math.floor(counter/1000)%60) : (Math.floor(counter/1000)%60)}`;
    setFinalCounter(result);

    return () => {
      if (id){
        clearInterval(id);
      };
    };

  }, [start, counter])

  

  return (
    <Container>
      <CounterText>{finalCounter}</CounterText>     
    </Container>
  );
};

export default Timer;
