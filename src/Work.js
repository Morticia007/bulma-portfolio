import React from 'react';
import Content from './Content';
import Cards from './Cards';
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
        <img
          alt='project 2'
          src='https://lh3.googleusercontent.com/W-psuZhv0zJiwCfK5OGAZxoSCXBvz-jaZS_-IEA2n63JWyXqbjqifrnoQiRYYuDJBvoUdf6S8BLrzSyX3NFqxpC1b8owB2_v-1RmxowqhNw_VgQRK34PPdrUzdg7hQjgg4h2_QBXl6eeH8uKnb8VWtVi7hKELuXVxpNdwZfKphs1zag1r0SskA4epEcCGb1nbCsUFjfFEyPODUslvgVd0zHQFi1Y_3_cuHZG37_f_4b6P-Y-15lQ8WxOKhNlXQ1AVtcms1CnRGFf1dQWbGn6HL_6w2cVCHGLk5G1O5mFeaI9TF-2wg7r9Z7h_F6nYHCoqZJhaG0Mk0grP3y2iDaoP4jbMHr2W0wvm4mPHkogi1K8dmsdJbRNDvFb6qVCihU8aLnF8Da83it9iNU48hGZizRiv3-h7pUq09M6JtQ5ZJMt8J5IgYzsTSNchamvCI_dSb2tdiKjfpoa7OOA8zLofeQMP4_cQmkZR3Fc1FZ1QqVTntbCrfcdQUfHPho1Ga65WYW5U2Lp3dUn5hhpPiB0-3bkgSS61aXporfYX9OjVso_cyu2wWdA3UR-3Xw_y284Rkv4BqAVtA0RGUWBqxMuVNnknSam0gZ_odKHBvl9eXyjmSfEvq-U_wJLMM0PW7kVmRWG21u6G6gDxCKAh5QFe1ZDZDBEfAulzM-Xp9M7tEp8BCIpD5meAD9dZksbLO1ZQPg-tvBFu9j3beW11-zH_w9m9fC2LAxncb8lMcsX7rHlgFwpIoBesck=w1292-h969-no?authuser=0'
        />
        <div className='hero-body'>
          <div className='content is-large has-text-centered'>
            <div>
              <h1
                style={{
                  marginBottom: 80,
                  marginTop: 80,
                }}
              >
                Wellness Intention Forums - WIF
              </h1>
              <p>A Community For Those Who Need It Most</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='container'>
        {projectContentList.map((item) => (
          <Content key={item.id} {...item} />
        ))}

        <div class='content is-normal'>
          <h1 className='has-text-centered'>BREAKING DOWN THE PROCESS</h1>
          <h2>WEEK 1 | RESEARCH</h2>
          <p>
            To understand my participants and how I could help, I needed to
            determine their level of mind body connection  I needed to know how
            they live - what impacts them day to day. I needed to know if the
            weight gain was triggered by something. - As a mortician there is a
            question always looming in my mind - What Happened?
          </p>
          <p>
            Getting to know my research participants was exciting and heart
            wrenching all at the same time. I found during my research they all
            had a lot in common. This broke my heart. And on some level I can
            understand exactly how they must feel. I had a ton of good cries
            during this phase of my project. 
          </p>
          <p>
            I was right about the triggering event, but it wasn’t what I thought
            it would be. I thought it was going to be the death of a loved one.
            It wasn’t! It was moving, which is a loss if you lose your community
            like my participants reported. There’s an aspect of grief here that
            sometimes is overlooked, but I want to bring it to life. We all
            grieve over losses. No matter what they are. I have found that we
            don’t let ourselves grieve properly, and then loneliness and
            depression kicks in. Usually, we associated it with something else
            going on and try to mask it. With my participants, they associated
            food with comfort to help ease their pain.
          </p>
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h1>Darko's Story</h1>
              <p>
                As a person dealing with weight gain and isolation, I want to
                have access to a community, where I can meet people just like
                me. People who struggle with weight, loneliness and lack of
                motivation. So we can all be accountability partners and a
                support system for each other, in our journey together.
              </p>
              <p>
                As you can see Darko needs
                <ol>
                  <li>community</li>
                  <li>accountability partner</li>
                  <li>support</li>
                  <li>people going through the same thing</li>
                </ol>
                His frustrations are
                <ol>
                  <li>loneliness </li>
                  <li>guilt</li>
                  <li>food association</li>
                </ol>
              </p>
            </div>
            <div className='column'>
              <img alt='project' src='https://i.ibb.co/NT8Q5DQ/darko.png' />
            </div>
          </div>
        </div>
        <hr />
        <div class='content is-normal'>
          <h2>WEEK 2 | RESEARCH</h2>
          <p>
            To understand the competitive landscape and how users interact with
            weight loss applications, I looked at two companies my research
            participants mentioned and one I knew that had the functionaity that
            my participants made clear were important to them.
          </p>
          <p>
            I identified a some common patterns my participants had in this
            areana as well: Weight loss apps are stressful, too expensive, needs
            features, and too confusing.
          </p>
        </div>
        <div className='columns'>
          <Cards />
        </div>
        <hr />
      </section>
      <section>
        <hr />
        <section>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h1>Pivot</h1>
                <p>
                  As I was reviewing all the data I had gathered I made a huge
                  discovery. If the potential users pain points were lack of
                  community, loneliness, and coping mechanisms and their pain
                  points with applications for weightloss were that weight loss
                  apps are stressful, too expensive, need more features, and are
                  too confusing, then I had to make a major decision. Do I try
                  to recreate a noom or weight watchers and hope to make it
                  better?
                </p>
                <p>
                  I needed to revisit the original problem statement. At this
                  point we alreadu know at least one of my assumptions had been
                  debunked by the research. I needed a new problem statement
                  that aligned more with the evolving scope of my project.
                </p>
                <p>
                  while keeping in mind the big questions. What can I do to
                  create community, bring people together, and not have to
                  charge them for it?
                </p>
              </div>
            </div>
          </div>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h1>Problem Statement Revised</h1>
                <p>
                  People who are overweight have had a significant life change,
                  where they moved, lost their community, or were affected by
                  covid isolation. They struggle with loneliness, depression,
                  and a loss of accountability, which all lead to lack of
                  motivation.
                </p>
              </div>
            </div>
          </div>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h1>Proposed Solution</h1>
                <p>
                  Let's reference our proto persona first before we get to the
                  possible solution - Darko used Reddit and Discord. Both of
                  those are somewhat of a community.
                </p>
                <p>
                  I decided based on everything I had learned up to now, to
                  build a forum specifically for people who are overweight and
                  struggle with loneliness, eating disorders, lack of community
                  and/support.
                </p>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h1>Design Evolution</h1>
              <h3>Forum MVP</h3>
              <ul>
                <li>Onboarding</li>
                <p>Splash screen with CTA/ sign up </p>
                <li>Home/Feed screen</li>
                <p>
                  {' '}
                  To see community feed, create post, edit communities they see
                  in feed,
                </p>
                <li>Hamburger Dropdown</li>
                <p>Footer nested inside to save "real estate" </p>
                <li>Profile Screen</li>
                <p>For all community, saved, chat, and comment features </p>
                <li>Activities Screen</li>
                <p>
                  Integration with fitness applications they use to see all
                  thier data in one place, with ability to share in the forums
                  to discuss progress.
                </p>
                <li>Community "Toggle" Screen</li>
                <p>
                  Ability to toggle on or off certain communities in order to have more control of their 
                  experience.
                </p>
                <li>Settings Screen</li>
                <p>
                  Navigate to all account editing settings. Profile, anonymous profile, communities, and devices
                </p>
                <li>Edit Profile Screen</li>
                <p>
                  Ability to edit user profile, and anonymous profile  
                </p>
                <li>Posting Overlay</li>
                <p>
                  Ability to post, with multiple type of post options feature and cross post feature.
                </p>
              </ul>
              <p>
                Users expressed enthusiasm for Wif and were very helpful in 
                their feedback. They were able to to provide great insight and could relate to why I decided 
                to build this product.With some being users of similar apps, they were able to provide thoughtful
                feedback as I progressed through the designs.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className='container-fluid'>
          <section style={{ marginBottom: 100 }}>
            <div className='content'>
              <h1 className='has-text-centered'>Wireframes</h1>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Onboarding Screens
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    alt='project 3'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img
                    alt='project 4'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>Lo-Fi</p>
                  <p>Option to customize screen based on user type.</p>
                  <p>Mockup</p>
                  <p>Option to customize screen based on user type.</p>
                </div>
              </div>
            </div>
          </section>
          <section style={{ marginBottom: 100 }}>
            <div className='content'>
              <h1 className='has-text-centered'>Wireframes</h1>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Onboarding Screens
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    alt='project 5'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img
                    alt='project 6'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>Lo-Fi</p>
                  <p>Option to customize screen based on user type.</p>
                  <p>Mockup</p>
                  <p>Option to customize screen based on user type.</p>
                </div>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Onboarding Screens
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    alt='project 7'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img
                    alt='project 8'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>Lo-Fi</p>
                  <p>Option to customize screen based on user type.</p>
                  <p>Mockup</p>
                  <p>Option to customize screen based on user type.</p>
                </div>
              </div>
            </div>
          </section>
          <section style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Onboarding Screens
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    alt='project 9'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup 1</h2>
                  <img
                    alt='project 10'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup 2</h2>
                  <img
                    alt='project 11'
                    height='500'
                    src='https://i.ibb.co/T0sKjrP/Splash.png'
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <p>Lo-Fi</p>
                  <p>Option to customize screen based on user type.</p>
                  <p>Mockup 1</p>
                  <p>Option to customize screen based on user type.</p>
                  <p>Mockup 2</p>
                  <p>Option to customize screen based on user type.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <section className='container'>
          <div className='content'>
            <h1>LESSONS LEARNED</h1>
            <p>
              Some Users expressed interest in developing the app and have
              provided additional feedback to explore.
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Work;
