import React from 'react';
import Content from './Content';
import Cards from './Cards';
import { v4 as uuidv4 } from 'uuid';
import Home from './assets/home.png';
import HomeCTA2 from './assets/home-cta-2.png';
import Splash2 from './assets/splash-2.png';
import RightHand from './assets/right-hand-color.png';
import DeviceMashups from './assets/Device Mashups.png';
import TaskFlows from './assets/user-flow-1.png';
import MappingJourney from './assets/user-flow-ere.png';
import FeedLoFi from './assets/feed-lofi.png';
import FeedHiFi from './assets/feed-hifi.png';
import Archetype from './assets/archetype-ere.png';
const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
      'As a personal project, I designed Elder Racing Equipment as web app. It is a solution for a small company who needs a way to solve their organizational painpoints so they can solve for motorized bicycle hobbyists painpoints.',

    secondP:
      'I committed to completing this within a two week sprint. I wanted to challenge myself to create a organizational solution for a great new company who provides solutions specifically for motorized bicycle hobbyists needs. This was super challenging since I was dealing with a very small niche market.',
  },
  {
    id: uuidv4(),
    heading: 'The Problem',
    firstP:
      'I had no real inside information or experience with this type of company when taking this project on. Just a small company in need of organizational help.',
    secondP:
      'As a designer who is very user centric, this company being also user centric really caught my attention and inspired me to help them with their needs. I felt like with the common ground we already had, both being inspired by helping people save time and their sanity, we could find a solution one way or another',
  },
  {
    id: uuidv4(),
    heading: 'Initial Problem Statement',
    firstP:
      'Elder Racing Equipment (ERE) would like to expand beyond receiving messages in Facebook messenger and by text, into a digital space and be able to provide customers with a more organized way to contact and purchase products, in order to have more control over their product sales and information requests.',
    secondP: `The owner of Elder Racing Equipment expressed that this is a problem for customers who are interested in the product since they can’t visually see the specifications of the product to make purchases. Along with the unorganized information requests and lack of ability to purchase without contacting him directly. This amount of information needed by customers for Elder Racing Equipment at present forces the owner to spend more time on replying to requests and less time on production of products.`,
  },
  {
    id: uuidv4(),
    heading: 'My Role',
    firstP:
      'I Initiated this project to challenge myself to step out of my comfort zone into a small world way out of my natural reach.  I performed user research, designed a responsive web app, and tested my designs with users.',
    secondP: `I relied heavily on the owner and any contacts he could throw my way for research purposes. I also joined every motorized bicycle group and forum I could find across social platforms`,
  },
  {
    id: uuidv4(),
    heading: 'Understanding The User',
    firstP:
      'Joining these bicycle groups was the only way I was going to get a glimpse into this niche market. I had a hard time getting research participants, because of the type of users I needed to find. Luckily some of the contacts the owner gave me followed through, and a nice young man from Sweden, I found in a bicycle group on reddit, came through.',
    secondP: `I identified specific people who are hobbyist in this market to learn more about their love of the hobby and painpoints. I also identified a business owner, to get a birds eye view from the business side to the hobbyist side. I felt like I needed every angle I could possibly take to understand the solution I was attempting to find.`,
  },
];

function ERE() {
  return (
    <div>
      <section className='hero is-medium'>
        <img alt='project 2' src={DeviceMashups} />
        <div className='hero-body'>
          <div className='content is-large has-text-centered'>
            <div>
              <h1
                style={{
                  marginBottom: 80,
                  marginTop: 80,
                }}>
                Elder Racing Equipment
              </h1>
              <p>A web app solution for a niche morized bicycle market</p>
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
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h1>BREAKING DOWN THE PROCESS</h1>
              <h2>WEEK 1 | RESEARCH</h2>
              <p>
                To understand this undertaking and how I could help this small
                business, I needed to understand their customers first. I
                prioritized my focus on first finding out:
                <ul>
                  <li>Who they are</li>
                  <li>Why they need this product</li>
                  <li>If I could align user needs with the business needs </li>
                </ul>
              </p>
              <p>
                It was quite the challenge to get these guys to talk. I say
                guys, because the hobbyist I was able to find were 100% men.
              </p>
              <p>
                The information I did find was pretty specific. They struggle
                with finding:
                <ol>
                  <li>Quality products</li>
                  <li>Sources they can trust for those products</li>
                  <li>
                    Quality sites that don't have "unsecure" in the browser
                  </li>
                  <li>
                    Time to put in all the work thay would need to find the
                    quality they are searching for
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>

        <div className='content container'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h1>Justin's Story</h1>
              <p>
                As a busy mechanic who just wants to build fun projects in my
                spare time, I want to have access to quality parts and quality
                websites that are secure. People who build motorized bicycles,
                do it in their spare time while working 40 hours a week. So it
                would be nice to find a company that I can trust, and that
                delivers the products I need, especially if the products and/or
                the site save me time.
              </p>
              <p>
                As you can see Justin needs
                <ol>
                  <li>quality</li>
                  <li>consistancy</li>
                  <li>security</li>
                  <li>a way to save time</li>
                </ol>
                His frustrations are
                <ol>
                  <li>low quality sites </li>
                  <li>lack of contact options for questions</li>
                  <li>build difficulties</li>
                </ol>
              </p>
            </div>
          </div>

          <img alt='project' src='https://i.ibb.co/J3VpCns/Archetype-ERE.png' />
        </div>
        <hr />

        <div class='content is-normal'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h2> COMPETITIVE RESEARCH</h2>
              <div>
                <div style={{ maxWidth: 840 }}>
                  <p>
                    To understand the competitive landscape and how users
                    interact with weight loss applications, I looked at two
                    companies my research participants mentioned and one I knew
                    that had the functionaity that my participants made clear
                    were important to them.
                  </p>
                  <p>
                    I identified a some common patterns my participants had in
                    this areana as well.
                    <ul>
                      <li>Weight loss apps are stressful</li>
                      <li>Weight loss apps are too expensive</li>
                      <li>Weight loss apps need more features</li>
                      <li>Weight loss apps are too confusing</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
      <section>
        <section>
          <div className='content container'>
            <div className='columns'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1>Proposed Solution</h1>
                <div>
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
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h1>Week 2 | Design Evolution</h1>

              <h3>Feature Prioritization</h3>
              <div>
                <div style={{ maxWidth: 840 }}>
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
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h3>Forum MVP</h3>
              <div>
                <div style={{ maxWidth: 840 }}>
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
                    I felt as if I needed to design numerous screens since a
                    forum has many facets and complexities, as well as keeping
                    my users at the forefront and making sure the experience was
                    smooth. I also found I could give users more control over
                    what forums they want to be active in by creating the
                    ability to pass on forums that they had no interest in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h3>User Flow</h3>
              <img alt='user mapping journey' src={MappingJourney} />
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
                  <h2 className='has-text-centered'>Home</h2>
                  <img style={{ height: 700 }} alt='Home' src={Home} />
                </div>
                <div>
                  <h2 className='has-text-centered'>Home CTA 2</h2>
                  <img style={{ height: 700 }} alt='HomeCTA2' src={HomeCTA2} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 400 }}>
                    <h3>Lo-Fi</h3>
                    <p>Splash screen with large call to action.</p>
                    <h3>Mockup</h3>
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
                    <h3>Lo-Fi</h3>
                    <p>User home/feed.</p>
                    <h3>Mockup</h3>
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
                    <h3>Lo-Fi</h3>
                    <p>
                      Originally I had planned for this to be main navigation.
                      So I placed everything I could think of that could posibly
                      go into this screen, in order to come back and delegate
                      and clean up during iteration .
                    </p>
                    <h3>Mockup</h3>
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
                    <h3>Lo-Fi</h3>
                    <p>
                      Originally I designed this screen for users personal posts
                      to live in, as I was using established forums like reddit,
                      and instagram for inspiration.
                    </p>
                    <h3>Mockup 1</h3>
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
                    <h3>Lo-Fi</h3>
                    <p>
                      This screen was a free for all at fist, I hadn't
                      established what content would be most appropriate for the
                      functionality.
                    </p>
                    <h3>Mockup 1</h3>
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
                      <li>
                        <h6>Community Toggle Screen:</h6>
                      </li>
                      <p>
                        Interactive toggle screen for user content management.
                      </p>
                      <li>
                        <h6>Account Settings Screen:</h6>
                      </li>
                      <p>Edit all account settings, and device integration.</p>
                      <li>
                        <h6>Edit Profile Screen:</h6>
                      </li>
                      <p>Profile customization.</p>
                      <li>
                        <h6>Post Screen/Overlay:</h6>
                      </li>
                      <p>Crosspost capability.</p>
                    </ol>
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
                      <li>
                        <h6>Community Toggle Screen:</h6>
                      </li>
                      <p>
                        Interactive toggle screen for user content management.
                      </p>
                      <li>
                        <h6>Account Settings Screen:</h6>
                      </li>
                      <p>Edit all account settings, and device integration.</p>
                      <li>
                        <h6>Edit Profile Screen:</h6>
                      </li>
                      <p>Profile customization.</p>
                      <li>
                        <h6>Post Screen/Overlay:</h6>
                      </li>
                      <p>Crosspost capability.</p>
                    </ol>
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
                      <li>
                        <h6>Community Toggle Screen:</h6>
                      </li>
                      <p>
                        Interactive toggle screen for user content management.
                      </p>
                      <li>
                        <h6>Account Settings Screen:</h6>
                      </li>
                      <p>Edit all account settings, and device integration.</p>
                      <li>
                        <h6>Edit Profile Screen:</h6>
                      </li>
                      <p>Profile customization.</p>
                      <li>
                        <h6>Post Screen/Overlay:</h6>
                      </li>
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
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h3>Usability Testing</h3>
                <h4>Objectives</h4>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 840 }}>
                    <ul>
                      <li>Determine if terminology makes sense</li>
                      <p>Is it human? </p>
                      <li>Determine if user/task flow is easy</li>
                      <p>Can they complete tasks?</p>
                      <li>Determine accesibility</li>
                      <p>Can they see everything? </p>
                      <li>Determine if navigation is easy</li>
                      <p>Can they navigate?</p>
                    </ul>
                    <p>
                      <h6>
                        *Each usability testing participant was given 5 tasks to
                        determine if all of the objectives listed above could be
                        validated.
                      </h6>
                    </p>
                    <p></p>
                    <p></p>
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
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ maxWidth: 700 }}>
                        <h4>
                          The next steps in my usability research are just
                          easier to show than tell.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />
          </div>
        </section>
        <section className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1>USABILITY SOLUTION</h1>
                <h4>
                  Below are the solutions I put in place to move the Home/Feed
                  Screen into the revision phase.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1>USABILITY REVISION</h1>
                <h4>
                  Below are the stages of revision. Screen featured throughout
                  this stage is the Home/Feed Screen. Main concentration is on
                  the Filter Bar and Floating Button.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1>RESULTS</h1>
                <h4>
                  Results during further usability testing achieved the
                  validation label I was going for. Results below.
                </h4>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className='container'>
          <div className='content'>
            <div className='content container'>
              <div className='columns'>
                <div className='column column is-half is-offset-one-quarter has-text-left'>
                  <div>
                    <h1>LESSONS LEARNED</h1>
                    <div style={{ maxWidth: 700 }}>
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
                        <li>Test throughout</li>
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
                              functionality.
                            </li>
                            <p>
                              I haven't made it a priority to discuss this part
                              of the application.{' '}
                              <p>
                                Even though you have seen a couple hints about
                                it, it wasn't essential for MVP.
                              </p>
                              During user testing there were alot of questions
                              about it and positve feedback. It seemed to spark
                              curiosity.
                            </p>
                            <h5>
                              If you'd like to know more about this project, I'd
                              love to connect.
                            </h5>
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

export default ERE;
