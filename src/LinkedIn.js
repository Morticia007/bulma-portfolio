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
    title: 'Home',
    subtitle: 'Call to action for people ready to get products they need',
    wireFrameImage: require('./assets/home.png'),
  },
  {
    id: uuidv4(),
    title: 'Home CTA2',
    subtitle: 'Learn more about ERE products',
    wireFrameImage: require('./assets/home-cta-2.png'),
  },
  {
    id: uuidv4(),
    title: 'Home CTA3',
    subtitle: 'More information about engine stands',
    wireFrameImage: require('./assets/home-cta-3.png'),
  },
  {
    id: uuidv4(),
    title: 'Testimonials',
    subtitle: 'Customer product and shopping reviews',
    wireFrameImage: require('./assets/testimonials.png'),
  },
];

const ereAboutScreenWireframes = [
  {
    id: uuidv4(),
    title: 'About Page',
    subtitle: 'Engage the users',
    wireFrameImage: require('./assets/about.png'),
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
            <div className='column is-half is-offset-one-quarter has-text-left'>
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
                Home Screen Flow
              </h2>
              <WireFrames wireFrameData={ereHomeScreenWireframes} />
            </div>
          </section>
          <section id='about' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                About Screen Flow
              </h2>
              <WireFrames wireFrameData={ereAboutScreenWireframes} />
            </div>
          </section>
          <section id='products' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Product Screens Flow
              </h2>
              <WireFrames wireFrameData={ereProductScreenWireframes} />
            </div>
          </section>
          <section id='auth' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Checkout Flow
              </h2>
              <WireFrames wireFrameData={ereCheckoutScreenWireframes} />
            </div>
          </section>
          <section id='contact' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Contact Flow
              </h2>
              <WireFrames wireFrameData={ereContactScreenWireframes} />
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
                      <h3>4 participants</h3>

                      <p>
                        All participants were given 7 scenarios and 7 tasks to
                        complete. The tasks test for:
                        <ol>
                          <h6>
                            <li>navigation</li>
                            <li>product details</li>
                            <li>contact flow</li>
                            <li>purchase flow </li>
                          </h6>
                        </ol>
                      </p>

                      <h4>Participants reported</h4>
                      <ol>
                        <li>ease of navigation</li>
                        <li>
                          complete understanding and appreciation of product
                          details
                        </li>
                        <li>ease of use in the contact flow</li>
                        <li>
                          appreciation for the simplicity of the purchase flow
                        </li>
                      </ol>

                      <p>
                        To my suprise and delight all participants reported that
                        the structure of the site fit in with their existing
                        mental modal and expectations.
                      </p>
                      <h5>The phrases most comonly used were</h5>
                      <ul>
                        <li>"I loved..."</li>
                        <li>"I really apreciate..."</li>
                        <li>"That was exactly..."</li>
                      </ul>
                      <h5>
                        When asked final questions regarding if they would
                        change anything
                      </h5>
                      <p>
                        The answers were unanimously "no", and then followed up
                        with why they wouldn't change anything, without being
                        prompted or asked. This validation was a big relief,
                        (and suprise) since my sprint was quickly coming to a
                        close.
                      </p>
                      <p>
                        I also included the owner of ERE in my usability testing
                        just to give him confidence in the project and to get
                        the validation I needed from him to recommend the
                        project for development.
                      </p>
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
                          <h6>Agile design is the only way to go!</h6>
                        </li>
                        <p>
                          I will stress this consistently. I work best with
                          consistant feedback. I am not a fan of wasting time. I
                          am aware that at any point in a project without
                          consistently getting feedback, the project could go
                          down the wrong path.
                        </p>
                        <li>
                          <h6>Niche markets are difficult</h6>
                        </li>
                        <p>
                          If I were to go back to the start of this project, I
                          would have given myself more time to submerge myself
                          in this community and learn more about this market.
                          Even though the project continued its evolution, I am
                          not sure that I was able to uncover as much as I would
                          have liked to.
                        </p>
                        <li>
                          <h6>
                            Framing research questions correctly will be the
                            gold in your sifting pan.
                          </h6>
                        </li>
                        <p>
                          I said it in my first project and I'll say it again! I
                          feel I wouldn't have been able to uncover any type of
                          competitive analysis (which in all reality didn't have
                          much impact on the project, besides understanding fail
                          vs. innovation). It did, however, give me an insight
                          into the passion, desire to be a source of connection,
                          and innovation of the owner of ERE.
                        </p>
                        <li>
                          <h6>Test throughout</h6>
                        </li>
                        <p>
                          This is another one of my golden rules! If I wouldn't
                          have tested this design throughout the design
                          evolution, I would have been met with a ton of
                          iterations looming over a deadline.
                        </p>
                      </ul>
                      <hr />
                      <section className='container'>
                        <div className='content'>
                          <h1> Next steps</h1>
                          <ol>
                            <li>
                              <h6>
                                Consult with ERE for approval and discuss the
                                timeline for development
                              </h6>
                            </li>
                            <li>
                              <h6>Get project ready for development.</h6>
                            </li>
                            <li>
                              <h6>
                                Meet with the developer, respecting EREs
                                timeline, and determine how we will proceed.
                              </h6>
                            </li>
                          </ol>
                          <h4>In my spare time:</h4>
                          <ul>
                            <li>
                              I will continue do more research and get more of a
                              reach within this community in order to gather
                              more information and insights.
                            </li>

                            <li>
                              I would like to revisit the designs and re-test
                              with another group of participants.
                            </li>
                            <ul>
                              <li>
                                <p>
                                  I feel like I need more time, since this
                                  particular group of individuals have proven to
                                  be hard to get to.
                                </p>
                              </li>
                              <li>
                                <p>
                                  I feel like the usability testing went too
                                  smoothly and that makes me wonder what I
                                  missed.
                                </p>
                              </li>
                            </ul>
                          </ul>
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
