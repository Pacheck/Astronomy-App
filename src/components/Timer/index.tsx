import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Text } from 'react-native';

import { Container, CounterText } from './styles';
import { NavigationScreenProp } from 'react-navigation';

type Dispatcher = ReturnType<typeof useDispatch>

interface NAV {
  navigation: NavigationScreenProp<any>;
}

const Timer: React.FC<NAV> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [start, setStart] = useState(false)
  const [counter, setCounter] = useState(600000);
  
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

    return () => {
      if (id){
        clearInterval(id);
      };
    };

  }, [start, counter])

  const seconds = (counter/1000)%60
  const minutes = (counter/(1000 * 60))%60
  const CounterTime = `${minutes.toFixed(0)}:${seconds < 10 ? '0' + seconds : seconds}`
  
  return (
    <Container>
      <CounterText>{CounterTime}</CounterText>     
    </Container>
  );
};

export default Timer;
