import React from 'react';
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';
import screens from './assets/screens-2.png';
import Desktopflow from './assets/desktop-flow.png';
import Mobileflow from './assets/mobile-flow.png';
import WireFrames from './WireFrames';
import ModalImage from 'react-modal-image';

const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
      'As a personal project, I decided to try to challenge myself with copywork to add a feature to Linkedin ',

    secondP:
      'I committed to completing this within a two week sprint. I wanted to challenge myself to create a new chat reply feature',
  },
  {
    id: uuidv4(),
    heading: 'The Problem',
    firstP:
      'Busy professionals need a way to communicate effectively with other busy professionals to mitigate miscommunication and save them time and unnecessary effort during a conversation.',
    secondP: ``,
  },
  {
    id: uuidv4(),
    heading: 'My Role',
    firstP:
      'I Initiated this project to challenge myself to see if I can effectively make improvements to products that already exist on a large scale. I performed user research, designed components for the desktop web app and mobile app, and tested my designs with users.',
  },
  {
    id: uuidv4(),
    heading: 'Understanding The User',
    firstP:
      'My research participants were linkedin users.',
    secondP: `. `,
  },
];

const ereHomeScreenWireframes = [
  {
    id: uuidv4(),
    title: '',
    subtitle: '',
    wireFrameImage: require('./assets/laptop-mockup-row-1.png'),
  },
  
];

const ereAboutScreenWireframes = [
  {
    id: uuidv4(),
    title: 'Home CTA2',
    subtitle: 'Learn more about ERE products',
    wireFrameImage: require('./assets/laptop-mockup-row-2.png'),
  },
  {
    id: uuidv4(),
    title: 'About Story',
    subtitle: 'Let them know what type of company they are supporting',
    wireFrameImage: require('./assets/about-story.png'),
  },
  {
    id: uuidv4(),
    title: 'Resources',
    subtitle:
      'Give them an easier way to find other trusted sources for products',
    wireFrameImage: require('./assets/about-resources.png'),
  },
  {
    id: uuidv4(),
    title: 'Footer',
    subtitle: 'More navigation',
    wireFrameImage: require('./assets/footer.png'),
  },
];

const ereProductScreenWireframes = [
  {
    id: uuidv4(),
    title: 'Products',
    subtitle: 'List of products with two choices',
    wireFrameImage: require('./assets/product-page.png'),
  },
  {
    id: uuidv4(),
    title: 'Product 1',
    subtitle: 'Description, specs, customizations and addons',
    wireFrameImage: require('./assets/p1-details.png'),
  },
  {
    id: uuidv4(),
    title: 'Product 2',
    subtitle: 'Description, specs, customizations and addons',
    wireFrameImage: require('./assets/p2-details.png'),
  },
  {
    id: uuidv4(),
    title: 'Cart',
    subtitle: 'Shopping Cart',
    wireFrameImage: require('./assets/cart.png'),
  },
];

const ereCheckoutScreenWireframes = [
  {
    id: uuidv4(),
    title: 'Authentication',
    subtitle: 'Fill in information (in the future-log in for faster checkout)',
    wireFrameImage: require('./assets/auth.png'),
  },
  {
    id: uuidv4(),
    title: 'Shipping',
    subtitle: 'Standard shipping page',
    wireFrameImage: require('./assets/shipping.png'),
  },
  {
    id: uuidv4(),
    title: 'Payment',
    subtitle: 'Secure payment methods',
    wireFrameImage: require('./assets/payment.png'),
  },
  {
    id: uuidv4(),
    title: 'Confirmation',
    subtitle: 'Order number for tracking and shipping reminders',
    wireFrameImage: require('./assets/confirmation.png'),
  },
];

const ereContactScreenWireframes = [
  {
    id: uuidv4(),
    title: 'FAQ',
    subtitle: `In case their question is already answered here. Has a dropdown at the bottom with the other forms to choose between if their question isn't answered`,
    wireFrameImage: require('./assets/faq.png'),
  },
  {
    id: uuidv4(),
    title: 'Info Request',
    subtitle: 'Information Request',
    wireFrameImage: require('./assets/info-request.png'),
  },
  {
    id: uuidv4(),
    title: 'Bulk Request',
    subtitle: 'Secure payment methods',
    wireFrameImage: require('./assets/bulk.png'),
  },
  {
    id: uuidv4(),
    title: 'Success',
    subtitle: 'Gives a success message about their submission',
    wireFrameImage: require('./assets/success.png'),
  },
];

function LinkedIn() {
  return (
    <div>
      <section className='hero is-medium'>
        <img alt='project 2' src={require('./assets/linkedin-cover.png')} />
        <div className='hero-body'>
          <div className='content is-large has-text-centered'>
            <div>
              <h1
                style={{
                  marginBottom: 80,
                  marginTop: 80,
                }}>
                LinkedIn Chat Reply
              </h1>
              <p>Chat Reply For LinkedIn</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className='container'>
        {projectContentList.map((item) => (
          <Content key={item.id} {...item} />
        ))}

        <div class='section content is-normal'>
          <h1 className='has-text-centered'>BREAKING DOWN THE PROCESS</h1>
          <h2 className='has-text-centered'>WEEK 1 | RESEARCH</h2>
          <div className='columns'>
            <div className='column is-half has-text-left'>
              <p>
                To understand how I could impliment this new feature I needed to
                know:
              </p>
              <ul>
                <li>
                  How often participants used the chat feature on Linkedin
                </li>
                <li>
                  If they had difficulty with clarity or effective communication
                </li>
                <li>What other chat platforms they use in thier daily life </li>
                <li>How they rated the other platforms </li>
                <li>Why they rated them the way they did </li>
                <li>Platforms they have abondoned and why </li>
              </ul>
            </div>
            <div className='column is-half has-text-left'>
              <p>
                Features that other chat platforms used that the users found
                important:
              </p>
              <ol>
                <li>Chat Reply - Priority</li>
                <li>Edit - Priority</li>
                <li>Delete - Priority</li>
                <li>Reactions - Priority</li>
                <li>Call feature - Priority</li>
                <li>Alerts - Priority</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='section content container'>
          <div className='columns is-desktop'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h1>COMPETITIVE RESEARCH</h1>
              <p>
                Features will make or break a chat application. When asking
                about platforms that the participants used it was pretty clear
                that the preferred platforms had very similar features, options,
                application choices.
              </p>

              <ol>
                <li>chat reply</li>
                <li>edit</li>
                <li>call feature</li>
                <li>mute</li>

                <li>delete instead of edit (whatsapp) </li>
                <li>web app and mobile app</li>
                <li>free</li>
              </ol>
            </div>
          </div>

          <img
            alt='competitive analysis'
            src='https://i.ibb.co/PDx7TRG/v1-Competitive-Analysis.png'
          />
        </div>
        <hr />

        <div class='section content is-normal'>
          <h2 className='has-text-centered'>
            {' '}
            Insights | Pain points | Take aways
          </h2>

          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <h4>Insights:</h4>
                <ol>
                  <li>Features determine use vs. abandon</li>
                  <li>There are many commonly used Chat apps</li>
                  <li>Features that save time and effort are crucial</li>
                  <li>
                    Clarity is especially important when users are communicating
                  </li>
                  <li>
                    Users really like the choice of browser web app/desktop app/
                    mobile app
                  </li>
                </ol>
                <h4>Pain Points:</h4>
                <ul>
                  <li>taking extra effort</li>
                  <li>taking extra time</li>
                  <li>lack of organization</li>
                  <li>lack of features they think are important</li>
                </ul>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <h4> Take aways:</h4>
                <ul>
                  <li>
                    Linkedin chat rated very low in favorite or preferred chat
                    applications
                  </li>
                  <li>Whatsapp rated highest in favorite or most used</li>
                  <li>
                    Features are the most important thing that determines usage
                  </li>
                  <li>
                    Time and effort that it takes a user while using an app will
                    either keep them coming back or deter them from using
                  </li>
                  <li>
                    The more helpful features the chat app has, the better it is
                  </li>
                  <li>
                    If the user doesn’t have access to features that help
                    clarity in communication the user is less likely to continue
                    to use that chat app
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <section className='section'>
          <div className='content container'>
            <div className='columns is-desktop'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1 className='has-text-centered'>Proposed Solution</h1>
                <div>
                  <div style={{ maxWidth: 840 }}>
                    <p>
                      I decided based user research to go ahead and start the
                      design process to add the chat reply feature to the
                      already existing Linkedin design system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </section>
        <div className='content container'>
          <h1 className='has-text-centered'>Week 2 | Design Evolution</h1>
          <hr />
          <h3 className='has-text-centered'>Component Prioritization</h3>
          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 640 }}>
                <ul>
                  <li>
                    <p>
                      {' '}
                      Build out chat components for web app to recreate Linkedin{' '}
                    </p>
                  </li>

                  <li>
                    <p>Build out the reactions bar with emojis and elipses </p>
                  </li>

                  <li>
                    <p>
                      {' '}
                      Build out options card component and add the reply feature
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <p>
                      Build out chat components for mobile app to recreate
                      Linkedin{' '}
                    </p>
                  </li>

                  <li>
                    <p>
                      Build out the emojis/options card component and add the
                      reply feature{' '}
                    </p>
                  </li>

                  <li>
                    <p>
                      Combine the components into prototype for testing the new
                      feature{' '}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='content container'>
          <h3 className='has-text-centered'> MVP</h3>
          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <p>Desktop Home Screen</p>
                  </li>

                  <li>
                    <li>
                      <p>Messages List Components</p>
                    </li>
                  </li>

                  <li>
                    <p>Messages Thread Components </p>
                  </li>

                  <li>
                    <p> Reactions Components </p>
                  </li>

                  <li>
                    <p>Options Card Component </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <p> Mobile Home Screen </p>
                  </li>

                  <li>
                    <p>Messages List Components </p>
                  </li>

                  <li>
                    <p>Messages Thread Components </p>
                  </li>

                  <li>
                    <p>Reactions/Options Components </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='section content container'>
          <div className='columns is-desktop'>
            <div className='has-text-centered'>
              <h3>User Flow</h3>
              <ModalImage
                small={Desktopflow}
                large={Desktopflow}
                alt='Diagram of User Flow'
              />
              <ModalImage
                small={Mobileflow}
                large={Mobileflow}
                alt='Diagram of User Flow'
              />
            </div>
          </div>
          <hr />
        </div>
        <div id='wireframes' className='section container'>
          <section id='home' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Emoji/Options Dropdown Component
              </h2>
              <img src={require('./assets/laptop-mockup-row-1.png')} />
            </div>
          </section>
          <section id='about' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Scrim
              </h2>
              <img src={require('./assets/laptop-mockup-row-2.png')} />
            </div>
          </section>
          <section id='products' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Chat Reply Bubble
              </h2>
              <img src={require('./assets/laptop-mockup-row-3.png')} />
            </div>
          </section>
          <section id='auth' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Emoji/Options Component
              </h2>
              <img src={require('./assets/mobile-mockup-row-1.png')} />
            </div>
          </section>
          <section id='contact' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Scrim
              </h2>
              <img src={require('./assets/mobile-mockup-row-2.png')} />
            </div>
          </section>
          <section id='contact' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Chat Reply Bubble
              </h2>
              <img src={require('./assets/mobile-mockup-row-3.png')} />
            </div>
          </section>
        </div>
        <hr />
        <section className='container section'>
          <div className='content'>
            <div className='content container'>
              <div className='columns'>
                <div className='column column is-half is-offset-one-quarter has-text-left'>
                  <div>
                    <h1>Usability Testing </h1>
                    <div style={{ maxWidth: 840 }}>
                      <h5>14 participants</h5>
                      <p>I used maze to test with users</p>
                      <p>
                        All participants were given 2 scenarios and 2 tasks to
                        complete. The tasks test for:
                        <ol>
                          <li>Opening the messages</li>
                          <li>New chat reply feature</li>
                        </ol>
                      </p>

                      <ul>
                        <li>At first it seemed testers were doing okay </li>
                        <li>
                          Then the results started taking a terrible nose dive
                        </li>
                        <li>Users were going way off the assumed path </li>
                        <li>
                          I got feedback that the test was broken and the
                          testers were getting trapped becuase the test screen
                          was not scaling correctly
                        </li>
                      </ul>

                      <p>
                        So I stopped the test right away to look at the results.
                        To my suprise the path most testers were taking (when
                        the test was working) was not the path I had built out.
                        These participants didn't even make it to the second
                        task because they either didn't know the path I had
                        built out or they were frustrated and bounced. This
                        insight was so vital! Once the test had broken no one
                        was getting to the second task at all due to the scaling
                        issue. so I figured out a small hidden trick in maze to
                        make sure it scaled correctly and ran it again.
                      </p>
                      <h3>Second Test</h3>
                      <h5>5 Participants</h5>
                      <ul>
                        <li>Users were still going off the path</li>
                        <li>60% made it to the second task</li>
                        <li>
                          It was confirmed, I was going to have to build out the
                          other path users preferred to get an accurate result
                          for the new chat feature
                        </li>
                      </ul>
                      <p>
                        I did, however, despite the test mishaps recieve very
                        positive feedback on the need for the feature, and the
                        overall idea.
                      </p>

                      <h3>Recommendation for Iteration/Rebuild </h3>
                      <ul>
                        <li>Home Screen - hook up message bubble in navbar </li>
                        <li>
                          Build out the screen that message bubble in the navbar
                          connects to.
                        </li>
                        <li>
                          Build out the components this new screen will require
                        </li>
                        <li>
                          Hook it up to my existing protoype to see if this will
                          help get a more accurate gauge on the feature
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container section'>
          <div className='content'>
            <div className='content container'>
              <div className='columns'>
                <div className='column column is-half is-offset-one-quarter has-text-left'>
                  <div>
                    <h1>LESSONS LEARNED</h1>
                    <div style={{ maxWidth: 840 }}>
                      <ul>
                        <li>
                          <h6>
                            You cannot-I repeat-cannot test a new feature in an
                            existing platform and not account for all paths
                            users take to get there!
                          </h6>
                        </li>
                        <p>
                          Users want what they want! This is not negative at
                          all! It teaches us valuable lessons about mental
                          models. If I were to test this with 100 people, my
                          assumption is that only 30 would make it to the new
                          feature to test it. Reason: I didn't account for the
                          more likely path that the other 70 people would
                          choose. I am curious now though, if I ran it again
                          with only the new path hooked up would the results of
                          that test be 70 made it and 30 never making it?
                          Unfortunately with the constraint of two weeks I set
                          for myself, at this time I will just move into the
                          revision phase and test both paths. I will definitely
                          revisit this and test the second path alone to see if
                          my assumptions are correct or if I will uncover more
                          gold!
                        </p>
                        <li>
                          <h6>
                            Attempting an 'Adding a Feature Project' is
                            priceless
                          </h6>
                        </li>
                        <p>
                          I think I learned more than I ever have about users,
                          user/task flows, mental models, and design systems
                          than I could of ever expected. Users are used to these
                          platforms already and use them daily, so when they
                          aren't given what they are used to test results can
                          get skewed very quickly.
                        </p>

                        <li>
                          <h6>Test Throughout</h6>
                        </li>
                        <p>
                          This was a bit more difficult to accomplish in this
                          project, and it showed me that no matter what, I
                          should always test no matter how difficult it is. Even
                          if it's by asking participants to just open the
                          existing platform and show me how they navigate it. If
                          I would have implimented this step I would have made
                          the realization much earlier, that there was an
                          important step I was missing in this project.
                        </p>
                      </ul>
                      <hr />
                      <section className='container'>
                        <div className='content'>
                          <h1> Next steps</h1>
                          <ol>
                            <li>
                              <p>Move into the Iteration Phase</p>
                            </li>
                            <li>
                              <p>
                                Build out new screens and components to add to
                                my existing prototype
                              </p>
                            </li>
                            <li>
                              <p>Retest final prototype</p>
                            </li>
                          </ol>

                          <h5>
                            If you'd like to know more about this project, or if
                            you are interested in collaborating, I'd love to
                            connect.
                          </h5>
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

export default LinkedIn;
