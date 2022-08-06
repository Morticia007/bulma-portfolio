import React from 'react';
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';
import screens from './assets/screens-2.png';
import MappingJourney from './assets/user-flow-ere.png';
import WireFrames from './WireFrames';
import ModalImage from 'react-modal-image';

const projectContentList = [
  {
    id: uuidv4(),
    heading: 'Executive Summary',
    firstP:
      'As a personal project, I designed Elder Racing Equipment as web app. It is a solution for a small company who needs a way to solve their organizational painpoints so they can solve for motorized bicycle hobbyists painpoints.',

    secondP:
      'I committed to completing this within a two week sprint. I wanted to challenge myself to create a organizational solution for a great new company who provides solutions specifically for motorized bicycle hobbyists needs. This was super challenging since I was dealing with a very small niche market. The result was solving for two completely different hobbyist pain point sets by solving for the Elder Racing Equipment painpoints.',
  },
  {
    id: uuidv4(),
    heading: 'The Problem',
    firstP:
      'Elder Racing Equipment (ERE) needs a way to expand beyond receiving messages in Facebook messenger and by text, into a digital space and be able to provide customers with a more organized way to contact and purchase products, in order to have more control over their product sales and information requests.',
    secondP: `The owner of Elder Racing Equipment expressed that this is a problem for customers who are interested in the product since they can’t visually see the specifications of the product to make purchases. Along with the unorganized information requests and lack of ability to purchase without contacting him directly. This amount of information needed by customers for Elder Racing Equipment at present forces the owner to spend more time on replying to requests and less time on production of products.`,
  },
  {
    id: uuidv4(),
    heading: 'My Role',
    firstP:
      'I Initiated this project to challenge myself to step out of my comfort zone into a small world way out of my natural reach.  I performed user research, designed a responsive web app, and tested my designs with users.',
  },
  {
    id: uuidv4(),
    heading: 'Understanding The User',
    firstP:
      'I relied heavily on the owner and any contacts he could throw my way for research purposes. I also joined every motorized bicycle group and forum I could find across social platforms. Joining these bicycle groups was the only way I was going to get a glimpse into this niche market. I had a hard time getting research participants, because of the type of users I needed to find. Luckily some of the contacts the owner gave me followed through, and a nice young man from Sweden, I found in a bicycle group on reddit, came through.',
    secondP: `I identified specific people who are hobbyist in this market to learn more about their love of the hobby and painpoints. I also identified a business owner, to get a birds eye view from the business side to the hobbyist side. I felt like I needed every angle I could possibly take to understand the solution I was attempting to find. `,
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

function ERE() {
  return (
    <div>
      <section className='hero is-medium'>
        <img alt='project 2' src={screens} />
        <div className='hero-body'>
          <div className='content is-large has-text-centered'>
            <div>
              <h1
                style={{
                  marginBottom: 80,
                  marginTop: 80,
                }}
              >
                Elder Racing Equipment
              </h1>
              <p>A web app solution for a niche motorized bicycle market</p>
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
                To understand how I could help this small business, I needed to
                understand their customers. I focused on discovering:
              </p>
              <ul>
                <li>Who they are</li>
                <li>Why they need this product</li>
                <li>If I could align user needs with the business needs </li>
              </ul>
            </div>
            <div className='column is-half has-text-left'>
              <p>They struggle finding:</p>
              <ol>
                <li>Quality products</li>
                <li>Sources they can trust for those products</li>
                <li>Quality sites that don't have "unsecure" in the browser</li>
                <li>Time to search for products</li>
              </ol>
            </div>
          </div>
        </div>

        <div className='section content container'>
          <div className='columns is-desktop'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h1>Justin's Story</h1>
              <p>
                As a busy mechanic who wants to build projects in my spare time,
                I want to have access to quality parts on secure websites.
                People who build motorized bicycles, do it in their spare time
                while working 40 hours a week. It would be nice to find a
                trustworthy company that has the products I need, especially if
                the products and/or the site save me time.
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

        <div class='section content is-normal'>
          <h2 className='has-text-centered'> COMPETITIVE RESEARCH</h2>

          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <p>
                  Finding competitors was challenging. ERE wasn't aware of
                  anyone else making these products. I discovered through
                  questions and research another business that makes an engine
                  stand similar to what is offered by ERE.
                </p>
                <p>
                  Because of the lack of competition, I questioned if ERE is in
                  a failing market or if they are ahead of the curve? I analyzed
                  data collected from user interviews to measure the need for
                  this product.
                </p>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <p>
                  Some of the pain points I discovered during user interviews
                  were:
                </p>
                <ul>
                  <li>wrestling with a motor while building</li>
                  <li>
                    having to mount and remove the motor to make adjustments
                  </li>
                  <li>
                    the bike falling over during these mounts and dismounts
                  </li>
                  <li>
                    extra motors lying aroud that could definitly use a stand
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class='section content is-normal'>
          <h2 className='has-text-centered'>HMW</h2>
          <div className='columns is-desktop'>
            <div className='column is-half  has-text-left'>
              <h3>How might we help?</h3>
              <h6>Hobbyists who struggle with:</h6>
              <ul>
                <li>wrestling with a motor while building</li>
                <li>
                  having to mount and remove the motor to make adjustments
                </li>
                <li>the bike falling over during mounts and dismounts</li>
                <li>extra motors lying around that need a stand</li>
              </ul>

              <h4>Align it with</h4>

              <h6>ERE who struggles with:</h6>
              <ul>
                <li>unorganized product information requests</li>
                <li>unorganized product order requests</li>
                <li>lack of payment method</li>
                <li>platform for all these features to live on</li>
              </ul>
              <h6>
                *At this moment in my project I realize the original problem
                statement is evolving.
              </h6>
            </div>
            <div className='column is-half has-text-left'>
              <p>
                We need to align user goals to business goals to help ERE with
                their organizational pain points, in order to make this product
                available to solve user painpoints with their builds.
              </p>
              <h6>But...</h6>
              <h6>
                What about hobbyists pain points that come with finding the
                products for the build?
              </h6>
              <ul>
                <li>Lack of products that aren't cheap knockoffs</li>
                <li>lack of quality sites to get products from</li>
                <li>
                  lack of knowing the right place to go to get these products
                </li>
                <li>
                  time wasted just trying to find something, anything they can
                  trust
                </li>
              </ul>
              <p>
                How might we align user goals to business goals in order to help
                ERE with their organizational painpoints, in order to make this
                product available to solve user painpoints with their builds
                <h6>AND</h6>Give them a place they can trust with resources to
                find other products they need?
              </p>
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
                <h1>Proposed Solution</h1>
                <div>
                  <div style={{ maxWidth: 840 }}>
                    <p>
                      So at this point it only seemed right to start the design
                      process with all the great things I got from my
                      participants and from ERE.
                    </p>
                    <p>
                      I decided based on everything I had learned, to build an
                      e-commerce web app that made the contact and payment
                      process easy. I wanted to go a step further though and
                      include some of the gold I had gathered along the way!
                      While writing the mission statement and the story about
                      the company it was clear that the owner of ERE is
                      determined to make the hobbyist life easier and more
                      connected, and the hobbyist was screaming for help with
                      getting the inside scoop! I'll take you on the golden
                      journey next.
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
          <h3 className='has-text-centered'>Feature Prioritization</h3>
          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <h5> Ease of Navigation </h5>
                  </li>
                  <p>Solving for: time</p>
                  <li>
                    <h5> Contact Form </h5>
                  </li>
                  <p>Solving for: difficulty asking questions</p>
                  <li>
                    <h5> Testimonials </h5>
                  </li>
                  <p>Solving for: confidence product quality</p>
                  <li>
                    <h5>Our mission and story </h5>
                  </li>
                  <p>Solving for confidence in the company</p>
                </ul>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <h5> Ease of Purchase </h5>
                  </li>
                  <p> Solving for need. </p>
                  <li>
                    <h5>Bulk order quote form </h5>
                  </li>
                  <p>
                    Solving for businesses who need to order products in bulk
                  </p>
                  <li>
                    <h5> Resources </h5>
                  </li>
                  <p>
                    Solving for the time it takes users to search for products
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='content container'>
          <h3 className='has-text-centered'>E-commerce MVP</h3>
          <div className='columns is-desktop'>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <h5>Home</h5>
                  </li>
                  <p>
                    Home screen with hero message, multiple CTAs, and
                    testimonials.
                  </p>
                  <li>
                    <li>
                      <h5>About Screen </h5>
                    </li>
                    <p>Mission, Story, Resources</p>
                  </li>

                  <li>
                    <h5>Product page </h5>
                  </li>
                  <p>Simple product list and a clear see more options </p>
                  <li>
                    <h5> Product Details Pages </h5>
                  </li>
                  <p>
                    Price, quantity, customization options, add ons, description
                    and spec details.
                  </p>
                  <li>
                    <h5> Cart </h5>
                  </li>
                  <p>Standard cart.</p>
                </ul>
              </div>
            </div>
            <div className='column is-half has-text-left'>
              <div style={{ maxWidth: 840 }}>
                <ul>
                  <li>
                    <h5> Authentication Page </h5>
                  </li>
                  <p>
                    This page will evolve into the user being able to login for
                    faster payment options and account info or just checking out
                    as a guest.
                  </p>
                  <li>
                    <h5>Shipping Details Page </h5>
                  </li>
                  <p>Standard shipping page.</p>
                  <li>
                    <h5>Payment Screen </h5>
                  </li>
                  <p>Multiple payment options.</p>
                  <li>
                    <h5>Confirmation Page </h5>
                  </li>
                  <p>With confirmation order number for tracking.</p>
                  <li>
                    <h5> Multiple Forms for Contact </h5>
                  </li>
                  <p>
                    FAQ with Form dropdown, an information request form, and a
                    Bulk quote request form .
                  </p>
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
                small={MappingJourney}
                large={MappingJourney}
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
                          This is another one of my golden rules! If i wouldn't
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

export default ERE;
