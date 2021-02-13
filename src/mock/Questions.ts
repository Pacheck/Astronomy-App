import { ImageSourcePropType } from "react-native";

export interface IAlternatives {
    id: string;
    answer: string;
    correct: boolean;
}

export interface IQuestion {
    id: number;
    description: string;
    image: ImageSourcePropType;
    alternatives: IAlternatives[];
}

export const MockQuestions = <IQuestion[]>[
    { 
        id: 1,
        description: 'Qual é o satélite natural do nosso planeta?',
        image: require('../../assets/question1.jpg'), 
        alternatives: [
            { id: '1', answer: 'Marte', correct: false },
            { id: '2', answer: 'Titã', correct: false },
            { id: '3', answer: 'Lua', correct: true },
            { id: '4', answer: 'Júpiter', correct: false },
            { id: '5', answer: 'Alpha centauri', correct: false }
        ]  
    },
    { 
        id: 2,
        description: 'Qual foi o ano em que o homem pisou na lua pela primeira vez?', 
        image: require('../../assets/question2.jpg'),
        alternatives: [
            { id: '6', answer: '1950', correct: false },
            { id: '7', answer: '1979', correct: false },
            { id: '8', answer: '1988', correct: false },
            { id: '9', answer: '1965', correct: false },
            { id: '10', answer: '1969', correct: true }
        ]  
    },
    { 
        id: 3,
        description: 'E qual foi o nome dado a esta misssão?', 
        image: require('../../assets/question3.jpg'),
        alternatives: [
            { id: '11', answer: 'Apollo 2', correct: false },
            { id: '12', answer: 'Apollo 7', correct: false },
            { id: '13', answer: 'Apollo 11', correct: true },
            { id: '14', answer: 'Apollo 15', correct: false },
            { id: '15', answer: 'Apollo 17', correct: false }
        ]  
    },
    { 
        id: 4,
        description: 'Quantos planetas existem no sistema solar?', 
        image: require('../../assets/question4.jpg'),
        alternatives: [
            { id: '16', answer: '7', correct: false },
            { id: '17', answer: '8', correct: true },
            { id: '18', answer: '9', correct: false },
            { id: '19', answer: '10', correct: false },
            { id: '20', answer: '11', correct: false }
        ]  
    },
    { 
        id: 5,
        description: 'Como é chamado o nome do movimento de órbita do planeta terra em volta do Sol?', 
        image: require('../../assets/question5.jpg'),
        alternatives: [
            { id: '21', answer: 'Transfusão', correct: false },
            { id: '22', answer: 'Giro', correct: false },
            { id: '23', answer: 'Rotação', correct: false },
            { id: '24', answer: 'Reversão', correct: false },
            { id: '25', answer: 'Translação', correct: true }
        ]  
    },
    { 
        id: 6,
        description: 'Qual é o maior planeta do sistema solar?', 
        image: require('../../assets/question6.png'),
        alternatives: [
            { id: '26', answer: 'Júpiter', correct: true },
            { id: '27', answer: 'Sol', correct: false },
            { id: '28', answer: 'Vênus', correct: false },
            { id: '29', answer: 'Mercúrio', correct: false },
            { id: '30', answer: 'Saturno', correct: false },
        ]  
    },
    { 
        id: 7,
        description: 'Qual é a velocidade da luz em m/s?', 
        image: require('../../assets/question7.jpg'),
        alternatives: [
            { id: '31', answer: '299.700.350 m/s', correct: false },
            { id: '32', answer: '299.792.458 m/s', correct: true },
            { id: '33', answer: '299.800.000 m/s', correct: false },
            { id: '34', answer: '299.999.872 m/s', correct: false },
            { id: '35', answer: '300.000.000 m/s', correct: false }
        ]  
    },
    { 
        id: 8,
        description: 'Qual é o planeta mais quente do sistema solar?', 
        image: require('../../assets/question8.jpg'),
        alternatives: [
            { id: '36', answer: 'Terra', correct: false },
            { id: '37', answer: 'Júpiter', correct: false },
            { id: '38', answer: 'Vênus', correct: true },
            { id: '39', answer: 'Marte', correct: false },
            { id: '40', answer: 'Mercúrio', correct: false }
        ]  
    },
    { 
        id: 9,
        description: 'Qual desses é o planeta mais frio do sistema solar?', 
        image: require('../../assets/question9.jpg'),
        alternatives: [
            { id: '41', answer: 'Marte', correct: false },
            { id: '42', answer: 'Urano', correct: true },
            { id: '43', answer: 'Netuno', correct: false },
            { id: '44', answer: 'Júpiter', correct: false },
            { id: '45', answer: 'Mercúrio', correct: false }
        ]  
    },
    { 
        id: 10,
        description: 'Qual é o nome da nossa Galáxia?', 
        image: require('../../assets/question10.png'),
        alternatives: [
            { id: '46', answer: 'Andrômeda', correct: false },
            { id: '47', answer: 'Galáxia de Bode', correct: false },
            { id: '48', answer: 'Galáxia do Cometa', correct: false },
            { id: '49', answer: 'Via láctea', correct: true },
            { id: '50', answer: 'Galáxia do Olho Negro', correct: false }
        ]  
    },
    { 
        id: 11,
        description: 'De todas galáxias listadas abaixo, qual delas é a nossa vizinha mais próxima?', 
        image: require('../../assets/question11.jpg'),
        alternatives: [
            { id: '51', answer: 'Galáxia do Triângulo', correct: false },
            { id: '52', answer: 'Anã de Phoenix', correct: false },
            { id: '53', answer: 'Pequena Nuvem de Magalhães(NGC 292)', correct: false },
            { id: '54', answer: 'Anã de Pegasus', correct: false },
            { id: '55', answer: 'Andrômeda', correct: true }
        ]  
    },
    { 
        id: 12,
        description: 'Qual é o nome da força que atrai os astros e é responsável por manter os mesmos em órbita?', 
        image: require('../../assets/question12.jpg'),
        alternatives: [
            { id: '56', answer: 'Força Nuclear Forte', correct: false },
            { id: '57', answer: 'Força G', correct: false },
            { id: '58', answer: 'Força Nuclear Fraca', correct: false },
            { id: '59', answer: 'Eletromagnetismo', correct: false },
            { id: '60', answer: 'Gravidade', correct: true }
        ]  
    },
    { 
        id: 13,
        description: 'Sabemos que o nosso Sol é muito quente (cerca de 5mil graus célsius), mas você sabe quão quente seu núcleo é? (aproximadamente)', 
        image: require('../../assets/question13.jpg'),
        alternatives: [
            { id: '61', answer: '15.000.000 ºC', correct: true },
            { id: '62', answer: '20.000.000 ºC', correct: false },
            { id: '63', answer: '15.000.500 ºC', correct: false },
            { id: '64', answer: '15.555.900 ºC', correct: false },
            { id: '65', answer: '15.980.000 ºC', correct: false }
        ]  
    },
    { 
        id: 14,
        description: 'Qual é o planeta com o maior número de luas no sistema solar?', 
        image: require('../../assets/question14.jpg'),
        alternatives: [
            { id: '66', answer: 'Saturno', correct: true },
            { id: '67', answer: 'Netuno', correct: false },
            { id: '68', answer: 'Terra', correct: false },
            { id: '69', answer: 'Kepler 42b', correct: false },
            { id: '70', answer: 'Júpiter', correct: false }
        ]  
    },
    { 
        id: 15,
        description: 'Qual é a quantidade de luas que o planeta Júpiter possui?', 
        image: require('../../assets/question15.jpg'),
        alternatives: [
            { id: '71', answer: '50', correct: false },
            { id: '72', answer: '82', correct: false },
            { id: '73', answer: '79', correct: true },
            { id: '74', answer: '85', correct: false },
            { id: '75', answer: '73', correct: false }
        ]  
    },
];
