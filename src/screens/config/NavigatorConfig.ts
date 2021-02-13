import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../HomeScreen';
import ResultScreen from '../ResultScreen';
import QuizScreen from '../QuizScreen';

import Timer from '../../components/Timer';

// {
//   Home: HomeScreen,
//   Result: ResultScreen,
//   Quiz: QuizScreen,
// },
// {
//   initialRouteName: "Home",
//   navigationOptions: {
//     header: <Timer/>
//   }
// },

const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Result: {
      screen: ResultScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        header: Timer
      }
    }
  })

export default createAppContainer(navigator);