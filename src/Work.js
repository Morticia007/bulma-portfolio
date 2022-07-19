import React from 'react';
import Content from './Content';
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';
import Splash from './assets/splash-1.png';
import Splash2 from './assets/splash-2.png';
import RightHand from './assets/right-hand-color.png';
import TaskFlows from './assets/taskflows.png';
import MappingJourney from './assets/mappingjourney.png';
import FeedLoFi from './assets/feed-lofi.png';
import FeedHiFi from './assets/feed-hifi.png';

const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
       'As a personal project, I designed WIF as web app forum. It helps the many people who struggle with weight loss to connect with and build supports systems within the forum in order to help increase community and accountability.',

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
        <img alt='project 2' src={RightHand} />
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
      <hr />
      <section className='container'>
        {projectContentList.map((item) => (
          <Content key={item.id} {...item} />
        ))}

        <div class='content is-normal'>
          <h1 className='has-text-centered'>BREAKING DOWN THE PROCESS</h1>
          <h2>WEEK 1 | RESEARCH</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ maxWidth: 800 }}>
              <p>
                To understand my participants and how I could help, I needed to
                determine their level of mind body connection I needed to know
                how they live - what impacts them day to day. I needed to know
                if the weight gain was triggered by something. - As a mortician
                there is a question always looming in my mind - What Happened?
              </p>
              <p>
                Getting to know my research participants was exciting and heart
                wrenching all at the same time. I found during my research they
                all had a lot in common. This broke my heart. And on some level
                I can understand exactly how they must feel. I had a ton of good
                cries during this phase of my project.
              </p>
              <p>
                I was right about the triggering event, but it wasn’t what I
                thought it would be. I thought it was going to be the death of a
                loved one. It wasn’t! It was moving, which is a loss if you lose
                your community like my participants reported. There’s an aspect
                of grief here that sometimes is overlooked, but I want to bring
                it to life. We all grieve over losses. No matter what they are.
                I have found that we don’t let ourselves grieve properly, and
                then loneliness and depression kicks in. Usually, we associated
                it with something else going on and try to mask it. With my
                participants, they associated food with comfort to help ease
                their pain.
              </p>
            </div>
          </div>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ maxWidth: 800 }}>
              <p>
                To understand the competitive landscape and how users interact
                with weight loss applications, I looked at two companies my
                research participants mentioned and one I knew that had the
                functionaity that my participants made clear were important to
                them.
              </p>
              <p>
                I identified a some common patterns my participants had in this
                areana as well: Weight loss apps are stressful, too expensive,
                needs features, and too confusing.
              </p>
            </div>
          </div>
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
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 800 }}>
                    <p>
                      As I was reviewing all the data I had gathered I made a
                      huge discovery. If the potential users pain points were
                      lack of community, loneliness, and coping mechanisms and
                      their pain points with applications for weightloss were
                      that weight loss apps are stressful, too expensive, need
                      more features, and are too confusing, then I had to make a
                      major decision. Do I try to recreate a noom or weight
                      watchers and hope to make it better?
                    </p>
                    <p>
                      I needed to revisit the original problem statement. At
                      this point we already know at least one of my assumptions
                      had been debunked by the research. I needed a new problem
                      statement that aligned more with the evolving scope of my
                      project.
                    </p>
                    <p>
                      All the while keeping in mind the new problem statement.
                      What can I do to create community, bring people together,
                      and not have to charge them?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h1>Problem Statement Revised</h1>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 800 }}>
                    <p>
                      People who are overweight have had a significant life
                      change, where they moved, lost their community, or were
                      affected by covid isolation. They struggle with
                      loneliness, depression, and a loss of accountability,
                      which all lead to lack of motivation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h1>Proposed Solution</h1>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 600 }}>
                    <p>
                      Let's reference our proto persona first before we get to
                      the possible solution - Darko used Reddit and Discord.
                      Both of those are somewhat of a community.
                    </p>
                    <p>
                      I decided based on everything I had learned up to now, to
                      build a forum specifically for people who are overweight
                      and struggle with loneliness, eating disorders, lack of
                      community and/support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h1>Design Evolution</h1>

              <h3>Feature Prioritization</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ maxWidth: 800 }}>
                  <ul>
                    <li>Community forums</li>
                    <p>Solving for: Loss of community/ lonliness/ price.</p>
                    <li>Account creation</li>
                    <p>Solving for: Loss of Community.</p>
                    <li>Ease of navigation</li>
                    <p> Solving for success. </p>
                    <li>Posting Capabilities</li>
                    <p>Solving for lack of connection/community.</p>
                    <li>Integration</li>
                    <p>
                      Solving for ease of use and being able to share progress
                      with their community, having all progress data in one
                      place/ short cuts.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h3>Forum MVP</h3>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ maxWidth: 800 }}>
                  <ul>
                    <li>Onboarding</li>
                    <p>Splash screen with CTA/ sign up. </p>
                    <li>Home/Feed screen</li>
                    <p>
                      To see community feed, create post, edit communities they
                      see in feed.
                    </p>
                    <li>Hamburger Dropdown</li>
                    <p>Footer nested inside to save "real estate". </p>
                    <li>Profile Screen</li>
                    <p>
                      For all community, saved, chat, and comment features.{' '}
                    </p>
                    <li>Activities Screen</li>
                    <p>
                      Integration with fitness applications potential users
                      already have to see all thier data in one place, with
                      ability to share in the forums to discuss progress.
                    </p>
                    <li>Community "Toggle" Screen</li>
                    <p>
                      Ability to toggle on or off certain communities in order
                      to have more control of their experience.
                    </p>
                    <li>Settings Screen</li>
                    <p>
                      Navigate to all account editing settings.
                      Profile,anonymous profile, communities, and devices.
                    </p>
                    <li>Edit Profile Screen</li>
                    <p>Ability to edit user profile, and anonymous profile.</p>
                    <li>Posting Overlay</li>
                    <p>
                      Ability to post, with multiple type of post options
                      feature and cross post feature.
                    </p>
                  </ul>
                  <p>
                    I felt as if I needed to design a fair amount of screens
                    since a forum has many facets and complexities under the
                    hood. I also needed to keep my users at the forefront and
                    make sure the experience was not only smooth, but to keep in
                    mind the impact I could make by giving them more control
                    over what forums they want to be active in, and the ability
                    to pass on forums that they had no interest in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h3>User Flow</h3>
              <img alt='user mapping journey' src={MappingJourney} />
            </div>
          </div>
          <hr />
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column'>
              <h3>User Task Flows</h3>
              <img alt='user task flows' src={TaskFlows} />
            </div>
          </div>
          <hr />
        </div>
        <div id='wireframes' className='container-fluid'>
          <section id='splash' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h1 className='has-text-centered'>Wireframes</h1>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Splash Screen
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img style={{ height: 700 }} alt='Splash' src={Splash} />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img style={{ height: 700 }} alt='Splash2' src={Splash2} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <p>Lo-Fi</p>
                    <p>Splash screen with large call to action.</p>
                    <p>Mockup</p>
                    <p>
                      I made a few simple changes to the design to keep it
                      simple with plenty of white space, and a clear route to
                      the CTA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='feed' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Feed Screen
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 5'
                    height='500'
                    src={FeedLoFi}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 6'
                    height='500'
                    src={FeedHiFi}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <p>Lo-Fi</p>
                    <p>User home/feed.</p>
                    <p>Mockup</p>
                    <p>
                      Added a better navigation function with the segment
                      changer element.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='hamburger' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Hamburger Screen
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 7'
                    height='500'
                    src={require('./assets/hamburger-lofi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 8'
                    height='500'
                    src={require('./assets/hamburger-hifi.png')}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <p>Lo-Fi</p>
                    <p>
                      Originally I had planned for this to be main navigation.
                      So I placed everything I could think of that could posibly
                      go into this screen, in order to come back and delegate
                      and clean up during iteration .
                    </p>
                    <p>Mockup</p>
                    <p>
                      Cleaned this up significantly when I chose to use the
                      segment picker navigation route.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='profile' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Profile Screen
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/profile-lofi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup 1</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/profile-hifi.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <p>Lo-Fi</p>
                    <p>
                      Originally I designed this screen for users personal posts
                      to live in, as I was using established forums like reddit,
                      and instagram for inspiration.
                    </p>
                    <p>Mockup 1</p>
                    <p>
                      During iteration I decided to clean it up and give the
                      user another level of control, to be able to chose if they
                      want to see those things by adjusting it to a menu. this
                      was also to cut down on clutter and not confuse the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='activity' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Activity Screen
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Lo-Fi</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/activity-lofi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Mockup 1</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/activity-hifi.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <p>Lo-Fi</p>
                    <p>
                      This screen was a free for all at fist, I hadn't
                      established what content would be most appropriate for the
                      functionality.
                    </p>
                    <p>Mockup 1</p>
                    <p>
                      As all of the screens evolved, the activity screen seemed
                      to just take form itself. Being that it is for discussion,
                      I looked back into my research participants and what
                      seemed important for them, also looking at what other
                      applications they would be using, the data that could be
                      possible and added them respectfully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='interactive-prototype' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Interactive Prototype
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Prototype 1</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/communities-hifi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Prototype 2</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/settings-hifi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Prototype 3</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/editprofile-hifi.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Prototype 4</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/postoverlay-hifi.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>Community Toggle Screen:</li>
                      <p>
                        Interactive toggle screen for user content management.
                      </p>
                      <li>Account Settings Screen:</li>
                      <p>Edit all account settings, and device integration.</p>
                      <li>Edit Profile Screen:</li>
                      <p>Profile customization.</p>
                      <li>Post Screen/Overlay:</li>
                      <p>Crosspost capability.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <section id='usability-testing'>
          <div className='content container'>
            <div className='columns'>
              <div className='column'>
                <h3>Usability Testing</h3>
                <h4>Objectives</h4>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 800 }}>
                    <ul>
                      <li>Determine if termonology makes sense</li>
                      <p>Is it human? </p>
                      <li>Determine if user/task flow is easy</li>
                      <p>Can they complete tasks?</p>
                      <li>Determine accesibility</li>
                      <p>Can they see everything? </p>
                      <li>Determine if navigation is easy</li>
                      <p>Can they navigate?</p>
                      
                      <h6>
                        Each usability testing participant was given 5 tasks
                         to determine if all of the objectives listed above could
                         be validated.   
                      </h6>
                    </ul>
                    <h4>Usability Testing Feedback Analysis</h4>
                    <ul>
                      <li>
                        Couldn’t find edit communities section in filter bar
                      </li>
                      <p>
                        Seemed to get stuck on the viewing now dropdown when
                        tasked to edit communities.
                      </p>
                      <li>
                        Confused by the plus icon in the floating button for
                        posting
                      </li>
                      <p>
                        When tasked to create a post, were reluctant to choose
                        the floating button. Once given help they reported they
                        thought it was what they were supposed to do, but were
                        thrown off by the plus icon on the floating button.
                      </p>
                      <li>Were attracted to the viewing now dropdown</li>
                      <p>
                        Thats Great! Except when that's not the place you were
                        hoping they would chose when tasked with something other
                        than finding the viewing now dropdown.
                      </p>
                      <li>
                        Reported to really enjoy the experience despite the few
                        small fumbles.
                      </li>
                      <p>
                        I was pleased by the feedback I got overall. The
                        participants liked the look and simplicity of the web
                        app. They validated many functions and gave me great
                        feedback on the objectives that didn't make it to
                        validation.
                      </p>
                    </ul>
                    <h4>Recommendations for Iteration</h4>
                    <ul>
                      <li>
                        Filter Bar Revision
                        <ol>
                          <li>Edit Communities</li>
                          <li>Viewing Now</li>
                        </ol>
                      </li>
                      <li>
                        Button Revision
                        <ol>
                          <li>Change Icon</li>
                        </ol>
                      </li>
                    </ul>
                    <p>
                      The next steps in my usability research are just easier to
                      show than tell.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                alt='testing'
                src={require('./assets/user-testing-research-13.png')}
              />
            </div>
            <hr />
          </div>
        </section>
        <section className='container'>
          <div className='content'>
            <h1>USABILITY SOLUTION</h1>
            <p>
              Below are the solutions I put in place to move the Home/Feed
              Screen into the revision phase.
            </p>
          </div>
          <img src={require('./assets/user-testing-research-14.png')} />
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <h1>USABILITY REVISION</h1>
            <p>
              Below are the stages of revision. Screen featured throughout this
              stage is the Home/Feed Screen. Main concentration is on the Filter
              Bar and Floating Button.
            </p>
          </div>
          <img src={require('./assets/redesign-4.png')} />
          <img src={require('./assets/redesign-5.png')} />
          <img src={require('./assets/redesign-6.png')} />
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <h1>RESULTS</h1>
            <p>
              Results during further usability testing achieved the validation
              label I was going for. Results below.
            </p>
          </div>
          <img src={require('./assets/results-1.png')} />
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <h1>LESSONS LEARNED</h1>
            <div className='content container'>
              <div className='columns'>
                <div className='column'>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ maxWidth: 800 }}>
                      <ul>
                        <li>Agile design is the only way to go!</li>
                        <p>
                          Feedback and iteration is the most important part of
                          design when you are user centric. Without the
                          feedback, my project may have not tested as well as it
                          did.
                        </p>
                        <li>Pivoting is definitely a real thing!</li>
                        <p>
                          Knowing when, why, and how is the hard part. Luckily I
                          am a pattern person and was able to see that there was
                          much more of a need for community than another weight
                          loss application.
                        </p>
                        <li>
                          Framing research questions correctly will be the gold
                          in your sifting pan.
                        </li>
                        <p>
                          This is what I will take more time to research and
                          understand for future projects.
                        </p>
                        <li>Test</li>

                        <li>Test</li>

                        <li>Re-test</li>
                        <p>
                          Don't ever sell yourself short or make assumptions
                          that back you into a place in your project you can't
                          come back from.
                        </p>
                      </ul>
                      <hr />
                      <section className='container'>
                        <div className='content'>
                          <h1> Next steps</h1>
                          <ul>
                            <li>Back to user research </li>
                            <p>
                              To see if I can uncover more golden information
                              and dig into why the "Anonymous Confessions" idea
                              sparked curiosity in so many people along the
                              project journey.
                            </p>
                            <li>
                              Revisit and design the "Anonymous Confessions"
                              functionality
                            </li>
                            <p>
                              I haven't made it a priority to discuss this part
                              of the application even though you have seen a
                              couple hints about it along the way, it is
                              something that wasn't essential for MVP but upon
                              mentioning it randomly to people I got a lot of
                              positve feedback. It seemed to spark curiosity
                            </p>
                            <li>Test</li>
                            <li>Iterate</li>
                            <li>Test some more</li>
                            <p>
                              If you'd like to know more about this project, I'd
                              love to connect.
                            </p>
                          </ul>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Work;
