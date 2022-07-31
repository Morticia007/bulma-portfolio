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
      'I used my experience and challenges helping people with weight loss as a starting point for my research. My initial hypothesis evolved as I began to understand my users and their varying needs. In the beginning, my assumptions were based on my experience with a variety of people I had helped over the years, along with my want to understand why so many people struggle.',
    secondP:
      'As a people advocate and healer, I am always curious about the reasons behind weight gain and how I can help. With all of the information out there, some good, some bad, are they just confused? There are so many apps out there already! Is it lack of will power? Is it lack of motivation? Lack of Knowledge? I had to rely on continuous user feedback to improve my designs. I was able to adapt to changes easily as they presented themselves.',
  },
  {
    id: uuidv4(),
    heading: 'Initial Problem Statement',
    firstP:
      'People who are overweight do not have the knowledge around how their body works, their behaviors, and/or the better nutrition decisions to correct the issue.',
    secondP: `When I began my research, I had some assumptions.
   
    1. Despite all the weight loss apps and calorie counter apps on the market today, certain people still struggle.
    2. We need to change the whole approach to weight loss.
    3. This will focus on helping the user figure out why they are overweight
    After my interviews I realized there was much more to this, more than I could have ever imagined.`,
  },
  {
    id: uuidv4(),
    heading: 'My Role',
    firstP:
      'I Initiated this project after reading the project briefs and realizing none of them having to do with health, were my cup of tea. So I created my own project, performed user research, designed a responsive web app, and tested my designs with users.',
    secondP: `I relied heavily on the users because, not only am I very user centric, but if it wasn't for them I would have nothing. No project, no problem, no assumption to test against. This was my chance to learn all the things that I could about people, in a subject I had researched for at least 20 years.`,
  },
  {
    id: uuidv4(),
    heading: 'Understanding The User',
    firstP:
      'As someone who lost her mother to cancer, who had struggled with her weight for years prior to that, I am very invested in health. Then as fate would unravel my story, I fell in love with a man who has struggled with weight on and off. At this time in his life, he had gained an uncontrollable amount and was labeled obese. It was very easy for me to identify with the user. I felt such a huge commitment to them, along with an overwhelming emotional connection.',
    secondP: `I identified people whom were struggling at present with weight loss or had in the past, but had regained the weight. I also identified people who had struggled in the past, but managed to keep it off for 6 or more months.`,
  },
];

export default Work2;