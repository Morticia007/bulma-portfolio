import React from 'react';
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';
import screens from './assets/screens-2.png';
import MappingJourney from './assets/user-flow-ere.png';

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
        <img alt='project 2' src={screens} />
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
                    At first the challenge was finding a competitor! ERE wasn't
                    awar of anyone else making these products.Luckily I asked
                    some pretty good questions in my initial research and found
                    out there was 1 individual other than ERE that does make an
                    engine stand.
                  </p>
                  <p>
                    Because of the lack of competition, it got me sratching my
                    head. Is this company in a failing market or are they ahead
                    of the curve? So I returned back to my interviews and
                    scoured for some information around the need for this
                    product. I uncovered all the needs my participants had
                    divulged including
                    <ul>
                      <li>wrestling with a motor while building</li>
                      <li>
                        having to mount and remove the motor to make adjustments
                      </li>
                      <li>
                        the bike falling over during these mounts and dismounts
                      </li>
                      <li>
                        extra motors lying aroud that could definitly use a
                        stand{' '}
                      </li>
                    </ul>
                    <p> </p>I felt a bit better about the health of ERE at that
                    point! I thought, okay wow "he is a UX designer for
                    motorized bicycles!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class='content is-normal'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h2> HMW</h2>
              <div>
                <div style={{ maxWidth: 840 }}>
                  <h3>How might we help?</h3>
                  <p>
                    <h6>Hobbyists who struggle with:</h6>
                    <ul>
                      <li>wrestling with a motor while building</li>
                      <li>
                        having to mount and remove the motor to make adjustments
                      </li>
                      <li>
                        the bike falling over during these mounts and dismounts
                      </li>
                      <li>
                        extra motors lying aroud that could definitly use a
                        stand{' '}
                      </li>
                    </ul>
                    <p>
                      <h4>Align it with</h4>
                    </p>
                    <h6>ERE who struggles with:</h6>
                    <ul>
                      <li>unorganized product information requests</li>
                      <li>unorganized product order requests</li>
                      <li>lack of payment method</li>
                      <li>
                        platform for all these features to essentially live on
                      </li>
                    </ul>
                    <p></p>We need a way to align user goals to business goals
                    in order to help ERE with their organizational painpoints,
                    in order to make this product available to solve user
                    painpoints with their builds. Sounds easy right?
                    <h6>But...</h6>
                    <h6>
                      What about the hobbyist painpoints that come with finding
                      the products for the build?
                    </h6>
                  </p>
                  <ul>
                    <li>Lack of products that aren't cheap knockoffs</li>
                    <li>lack of quality sites to get products from</li>
                    <li>
                      lack of knowing the right place to go to get these
                      products, without needing to be "in the cool kid group"
                    </li>
                    <li>
                      time wasted just trying to find something, anything they
                      can trust
                    </li>
                  </ul>

                  <p>
                    How might we align user goals to business goals in order
                    to help ERE with their organizational painpoints, in order
                    to make this product available to solve user painpoints with
                    their builds <h6>AND</h6>Give them a place they can trust
                    with resources to find other products they need?{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <section>
          <div className='content container'>
            <div className='columns'>
              <div className='column is-half is-offset-one-quarter has-text-left'>
                <h1>Proposed Solution</h1>
                <div>
                  <div style={{ maxWidth: 600 }}>
                    <p>
                      So at this point it only seemed right to start the design
                      process with all the great things I got from my
                      participants and from ERE.
                    </p>
                    <p>
                      I decided based on everything I had learned up to now, to
                      build an e-commerce web app that made the contact process
                      easy, along with the purchase process. I wanted to go a
                      step further though and include some of the gold I had
                      gathered along the way! While writing the mission
                      statement and the story about the company it was clear
                      that the owner of ERE is bound and detemined to make the
                      hobbyist life easier and more connected, and the hobbyist
                      was screaming for help with getting the inside scoop! I'll
                      take you on the golden journey next.
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
                    <li>
                      <h5> Ease of Navigation </h5>
                    </li>
                    <p>Solving for: time.</p>
                    <li>
                      <h5> Contact Form </h5>
                    </li>
                    <p>Solving for: lack of ways to ask important questions.</p>
                    <li>
                      <h5> Ease of Purchase </h5>
                    </li>
                    <p> Solving for need. </p>
                    <li>
                      <h5> Buk order quote form </h5>
                    </li>
                    <p>
                      Solving for businesses who want to commission ERE for a
                      certain amount of stands per year.
                    </p>
                    <li>
                      <h5> Resources </h5>
                    </li>
                    <p>
                      Solving for the time and energy the users take searching
                      for what they need
                    </p>
                    <li>
                      <h5> Testimonials </h5>
                    </li>
                    <p>Solving for confidence in the product quality</p>
                    <li>
                      <h5>Our mission and story </h5>
                    </li>
                    <p>Solving for confidence in the company</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='content container'>
          <div className='columns'>
            <div className='column is-half is-offset-one-quarter has-text-left'>
              <h3>E-commerce Web App MVP</h3>
              <div>
                <div style={{ maxWidth: 840 }}>
                  <ul>
                    <li>
                      <h5>Home</h5>
                    </li>
                    <p>
                      Home screen with hero message, multiple CTAs, and
                      testimonials.{' '}
                    </p>
                    <li>
                      <li>
                        <h5> About Screen </h5>
                      </li>
                      <p>Mission, Story, Resources</p>
                    </li>

                    <li>
                      <h5> Product page </h5>
                    </li>
                    <p>Simple product list and a clear see more option. </p>
                    <li>
                      <h5> Product Details Pages </h5>
                    </li>
                    <p>
                      Price, quantity, customization options, add ons,
                      description and spec details.{' '}
                    </p>
                    <li>
                      <h5> Cart </h5>
                    </li>
                    <p>Standard cart.</p>
                    <li>
                      <h5> Authentication Page </h5>
                    </li>
                    <p>
                      This page will eventually evolve into the user being able
                      to login for faster payment options and account info or
                      just checking out as a guest.
                    </p>
                    <li>
                      <h5> Shipping Details Page </h5>
                    </li>
                    <p>Standard shipping page.</p>
                    <li>
                      <h5>Payment Screen </h5>
                    </li>
                    <p>Multiple payment options.</p>
                    <li>
                      <h5> Confirmation Page </h5>
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
                  <p>
                    I knew going into this design, being an e-commerce site,
                    there would be a ton of screens even though I was only
                    designing an MVP. My main focus for ERE specifically is
                    contact and purchase.
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
          <section id='home' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Home Screen Flow
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Home</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/home.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Home CTA2</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/home-cta-2.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Home CTA3 </h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/home-cta-3.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Testimonials</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/testimonials.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>
                        <h6>Home:</h6>
                      </li>
                      <p>
                        Big call to action for people who already are determined
                        to get to the products.
                      </p>
                      <li>
                        <h6> Home CTA 2:</h6>
                      </li>
                      <p>Learn More.</p>
                      <li>
                        <h6>Home CTA 3:</h6>
                      </li>
                      <p>More information about the stands.</p>
                      <li>
                        <h6>Testimonials:</h6>
                      </li>
                      <p>Customers who love the products.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='about' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                About Screen Flow
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>About</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/about.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>About Story</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/about-story.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Resources </h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/about-resources.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Footer</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/footer.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>
                        <h6>About:</h6>
                      </li>
                      <p>Engage the users.</p>
                      <li>
                        <h6>About us-Story:</h6>
                      </li>
                      <p>
                        Let them know what type of company they are supporting .
                      </p>
                      <li>
                        <h6>Resources:</h6>
                      </li>
                      <p>
                        Give them an easier way to find other trusted sources
                        for products
                      </p>
                      <li>
                        <h6>Footer:</h6>
                      </li>
                      <p>More navigation.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='products' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Product Screens Flow
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Products Page</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/product-page.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Product 1</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/p1-details.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Product 2 </h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/p2-details.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Cart</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/cart.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>
                        <h6>Products Page:</h6>
                      </li>
                      <p>
                        List of products with two choices depending on your
                        knowledge of the product already.
                      </p>
                      <li>
                        <h6>Product 1 Details:</h6>
                      </li>
                      <p>Description, specs, customizations and addons.</p>
                      <li>
                        <h6>Product 2 Details:</h6>
                      </li>
                      <p>Description, specs, customizations and addons.</p>
                      <li>
                        <h6>Cart:</h6>
                      </li>
                      <p>Standard cart.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='auth' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
                Checkout Flow
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>Authentication</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/auth.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Shipping</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/shipping.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Payment </h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/payment.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Confirmation</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/confirmation.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>
                        <h6>Authentication Page:</h6>
                      </li>
                      <p>
                        Fill in information (in the future-log in for faster
                        checkout).
                      </p>
                      <li>
                        <h6>Shipping:</h6>
                      </li>
                      <p>Standard shipping page.</p>
                      <li>
                        <h6>Payment Page:</h6>
                      </li>
                      <p>Secure payment methods.</p>
                      <li>
                        <h6>Confirmation Page:</h6>
                      </li>
                      <p>Order number for tracking and shipping reminders.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='contact' style={{ marginBottom: 100 }}>
            <div className='content'>
              <h2 style={{ marginBottom: 50 }} className='has-text-centered'>
               Contact Flow
              </h2>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                  <h2 className='has-text-centered'>FAQ</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 9'
                    height='500'
                    src={require('./assets/faq.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Info Request</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 10'
                    height='500'
                    src={require('./assets/info-request.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Bulk Request </h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/bulk.png')}
                  />
                </div>
                <div>
                  <h2 className='has-text-centered'>Success</h2>
                  <img
                    style={{ maxHeight: 700 }}
                    alt='project 11'
                    height='500'
                    src={require('./assets/success.png')}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ maxWidth: 350 }}>
                    <ol>
                      <li>
                        <h6>FAQ:</h6>
                      </li>
                      <p>
                        In case their question is already answered here. Has a
                        dropdown at the bottom with the other forms to choose
                        between if their question isn't answered
                      </p>
                      <li>
                        <h6>Information Request Form:</h6>
                      </li>
                      <p>Standard information request.</p>
                      <li>
                        <h6>Bulk Quote Form:</h6>
                      </li>
                      <p>
                        For customers who are buying in bulk or companies
                        commissioning for a certain amount of products per year.
                      </p>
                      <li>
                        <h6>Validation page:</h6>
                      </li>
                      <p>Give's a success message about their submission.</p>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <section className='container'>
          <div className='content'>
            <div className='content container'>
              <div className='columns'>
                <div className='column column is-half is-offset-one-quarter has-text-left'>
                  <div>
                    <h1>Usability Testing </h1>
                    <div style={{ maxWidth: 700 }}>
                      <h3>4 participants</h3>

                      <p>
                        All participants were given 6 scenerios and tasks to
                        complate. The tasks were specifically to test for:
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
                          appreciation for the simplicity of the purchase flow{' '}
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
                        promted or asked. This validation was a big relief, (and
                        suprise) since my sprint was quickly coming to a close.
                      </p>
                      <p>
                        I also included the owner of ERE in my usability testing
                        just to give him confidence in the project and to get
                        the validation I needed from him to recommend the
                        project for development.
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
        </section>
        <section className='container'>
          <div className='content'>
            <div className='content container'>
              <div className='columns'>
                <div className='column column is-half is-offset-one-quarter has-text-left'>
                  <div>
                    <h1>LESSONS LEARNED</h1>
                    <div style={{ maxWidth: 700 }}>
                      <ul>
                        <li>
                          <h6>Agile design is the only way to go!</h6>
                        </li>
                        <p>
                          I will stress this consistently. I work best with
                          consistant feedback. I am not a fan of wasting anyones
                          time. I am very aware that at any point in a project
                          without consistently getting feedback, the project
                          could go down the wrong path very easily.
                        </p>
                        <li>
                          <h6>Niche markets are difficult</h6>
                        </li>
                        <p>
                          If I were to go back to the start of this project, I
                          would have given myself more time to submerge myself
                          in this community and learn more about this market.
                          Even though the project continued its evolution I am
                          not sure that I was able to uncover as much gold as I
                          would have liked to.{' '}
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
                          into the passion and innovation of the owner of ERE.
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
                          <h4>Get ready for Dev</h4>

                          <h6>
                            Work with the developer to understand how he would
                            like me to proceed
                          </h6>
                          <ol>
                            <li>What software does he prefer...</li>
                            <li>What naming conventions does he prefer ...</li>
                            <li>What file types ...</li>
                          </ol>

                          <ul>
                            <p>
                              ...
                              <p>...</p>
                              ...
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
