import React from 'react';
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';

const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
      'I used my experience and challenges with helping people with weight loss as a starting point for my research. My initial hypothesis evolved as I began to understand my users and their varying needs. My initial hypothesis was based on my experience with, a variety of people I had helped over the years and my want to understand why so many people struggle.',
    secondP:
      'I committed to completing this, with an open mind, to find out how I could help this niche of folks and build something useful. This was a steep learning curve for me, as it was my first official project as a Ux/Ui Designer.',
  },
  {
    id: uuidv4(),
    heading: 'The Problem',
    firstP:
      'I used my experience and challenges with helping people with weight loss as a starting point for my research. My initial hypothesis evolved as I began to understand my users and their varying needs. My initial hypothesis was based on my experience with, a variety of people I had helped over the years along with my want to understand why so many people struggle.',
    secondP:
      'As a people advocate and healer, I am always curious about the why behind weight gain and how I can help. With all of the information out there, some good some bad, are they just confused? There are so many apps out there already! Is it lack of will power? Is it lack of motivation? Lack of Knowledge? I had to rely on continuous user feedback to improve my designs. Being that this was an Academy project, I was able to adapt to changes easily without impacting a team or business.',
  },
  {
    id: uuidv4(),
    heading: 'Initial Problem Statement',
    firstP:
      'People who are overweight do not have the knowledge around how their body works, their behaviors, and/or the better nutrition decisions to correct the issue.',
    secondP: `When I began my research, I had some assumptions. After my interviews I realized there was much more to this, more than I could have ever imagined.
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
      'As someone who lost her mother to cancer, and had struggled with her weight for years prior to that Then as fate would would tell my story, I fell in love with a man who has struggled with weight on and off, but this time (in his life) he had gained an uncontrollable amount and labeled obese. It was very easy for me to identify with the user, and even felt such a huge commitment to them, not to mention the, sometimes overwhelming, emotional connection.',
    secondP: `I identified people with the hardship of struggling with weight loss, people looking for help. My interviews were with people who were struggling at present with weight loss or who had in the past, and regained it. I also identified people who had struggled in the past, lost the weight, and have kept it off for 6 or more months.`,
  },
];

function Work() {
  return (
    <div>
      <section className='hero is-medium'>
        <img src='https://lh3.googleusercontent.com/W-psuZhv0zJiwCfK5OGAZxoSCXBvz-jaZS_-IEA2n63JWyXqbjqifrnoQiRYYuDJBvoUdf6S8BLrzSyX3NFqxpC1b8owB2_v-1RmxowqhNw_VgQRK34PPdrUzdg7hQjgg4h2_QBXl6eeH8uKnb8VWtVi7hKELuXVxpNdwZfKphs1zag1r0SskA4epEcCGb1nbCsUFjfFEyPODUslvgVd0zHQFi1Y_3_cuHZG37_f_4b6P-Y-15lQ8WxOKhNlXQ1AVtcms1CnRGFf1dQWbGn6HL_6w2cVCHGLk5G1O5mFeaI9TF-2wg7r9Z7h_F6nYHCoqZJhaG0Mk0grP3y2iDaoP4jbMHr2W0wvm4mPHkogi1K8dmsdJbRNDvFb6qVCihU8aLnF8Da83it9iNU48hGZizRiv3-h7pUq09M6JtQ5ZJMt8J5IgYzsTSNchamvCI_dSb2tdiKjfpoa7OOA8zLofeQMP4_cQmkZR3Fc1FZ1QqVTntbCrfcdQUfHPho1Ga65WYW5U2Lp3dUn5hhpPiB0-3bkgSS61aXporfYX9OjVso_cyu2wWdA3UR-3Xw_y284Rkv4BqAVtA0RGUWBqxMuVNnknSam0gZ_odKHBvl9eXyjmSfEvq-U_wJLMM0PW7kVmRWG21u6G6gDxCKAh5QFe1ZDZDBEfAulzM-Xp9M7tEp8BCIpD5meAD9dZksbLO1ZQPg-tvBFu9j3beW11-zH_w9m9fC2LAxncb8lMcsX7rHlgFwpIoBesck=w1292-h969-no?authuser=0' />
        <div className='hero-body'>
          <div className='content is-large has-text-centered'>
            <div>
              <h1
                style={{
                  marginBottom: 80,
                  marginTop: 80,
                }}>
                Wellness Intention Forums - WIF
              </h1>
              <p>A Community For Those Who Need It Most</p>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        {projectContentList.map((item) => (
          <Content key={item.id} {...item} />
        ))}

        <div class='content is-normal'>
          <h1 className='has-text-centered'>BREAKING DOWN THE PROCESS</h1>
          <h2>WEEK 1 | RESEARCH</h2>
          <p>
            To understand the competitive landscape and how users interact with
            financial and productivity travel tools, I identified popular
            currency apps to compare features, observed users interacting with
            those apps, and developed a set of personas.
          </p>
          <p>
            I identified three currency conversion apps based on most frequently
            downloaded apps in the Apple App Store, online reviews, and
            suggestions from frequent travelers. I observed my users as they
            played with the apps and walked through each of the screens with
            them to better understand what they liked, their pain points, and
            ideas for enhancements.
          </p>
        </div>
        <div className='columns'>
          <div className='column'>
            <div class='card'>
              <div class='card-content'>
                <div class='content'>
                  <div>
                    <ul className='block'>
                      <h1>Noom</h1>
                      <h2 className='block'>Advantages</h2>

                      <li>15 Years</li>
                      <li>Coaches</li>
                      <li>Behavioral Science</li>
                    </ul>
                  </div>
                  <div className='block'>
                    <ul className='block'>
                      <h2>Disadvantages</h2>
                      <li>Expensive</li>
                      <li>Difficult to Cancel</li>
                      <li>Promotes Diet Cultur</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div class='card'>
              <div class='card-content'>
                <div class='content'>
                  <div>
                    <ul className='block'>
                      <h1>Noom</h1>
                      <h2 className='block'>Advantages</h2>

                      <li>15 Years</li>
                      <li>Coaches</li>
                      <li>Behavioral Science</li>
                    </ul>
                  </div>
                  <div className='block'>
                    <ul className='block'>
                      <h2>Disadvantages</h2>
                      <li>Expensive</li>
                      <li>Difficult to Cancel</li>
                      <li>Promotes Diet Cultur</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div class='card'>
              <div class='card-content'>
                <div class='content'>
                  <div>
                    <ul className='block'>
                      <h1>Noom</h1>
                      <h2 className='block'>Advantages</h2>

                      <li>15 Years</li>
                      <li>Coaches</li>
                      <li>Behavioral Science</li>
                    </ul>
                  </div>
                  <div className='block'>
                    <ul className='block'>
                      <h2>Disadvantages</h2>
                      <li>Expensive</li>
                      <li>Difficult to Cancel</li>
                      <li>Promotes Diet Cultur</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
