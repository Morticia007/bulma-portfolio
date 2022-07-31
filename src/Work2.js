import React from 'react';
import Content from './Content';
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';


const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
      'As a personal project, .',

    secondP:
      'I committed to completing this, in a two week sprint.',
  },
  {
    id: uuidv4(),
    heading: 'The Problem',
    firstP:
      '.',
    secondP:
      '.',
  },
  {
    id: uuidv4(),
    heading: 'Initial Problem Statement',
    firstP:
      '.',
    secondP: `When I began my research,...
   
    1. .
    2. .
    3. 
    .`,
  },
  {
    id: uuidv4(),
    heading: 'My Role',
    firstP:
      'I Initiated this project .',
    secondP: `I relied heavily on the users because, not only am I very user centric,...`,
  },
  {
    id: uuidv4(),
    heading: 'Understanding The User',
    firstP:
      'As someone .',
    secondP: `I identified people whom ...`,
  },
];

export default Work2;