'use strict';

const helloWorldMap = {
	sv: ['Hallå', 'världen'],
	en: ['Hello', 'world'],
	es: ['Ola', 'mundo'],
	is: ['Halló', 'heimur']
};

export const supportedLanguages = () => Object.keys(helloWorldMap);

export const helloWorlds = (langCode = 'sv') => helloWorldMap[langCode];

export const helloRandom = () => Object.keys(helloWorldMap)[Math.floor(Math.random() * supportedLanguages().length)];
