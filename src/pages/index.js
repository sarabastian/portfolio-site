import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';
import { FaReact } from 'react-icons/fa';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who I am</h2>
          </header>
          <p>
            Hi there, I'm Sara, a full-stack engineer who turned a background in ancient and modern languages into a pursuit to learn, and ultimately love, computer languages.
          
          I'm most energized when I am helping build high quality product for forward-looking teams and pioneering missions, while also building strong coworking relationships.
            <br></br>
            <br></br>
            I look forward to the countless doors programming opens to continue down this path of life-long learning and self-improvement.
            When not at the computer, you can find me skiing, reading, road tripping - or on my way to pet your dog.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Stuff I do</h2>
          </header>
          <p>
            My stack includes Ruby on Rails, React.js, HTML5/CSS, and SQLite. 
            Passionate about all areas of development, from user story road-mapping to design, debugging, and implementation.
          </p>
          <ul className="icons-grid">
            <li>
            <span className="icon major fa-diamond"/>
            
              <h3>Back-end <br></br>development </h3>
            </li>
            <li>
          
            <span className="icon major fa-code" />
        
              <h3>Object-Oriented Programming</h3>
            </li>
            <li>
              <span className="icon major fa-object-group" />
              <h3>UI engineering </h3>
            </li>
            <li>
              <span className="icon major fa-desktop" />
              <h3>Responsive <br></br>
                web design</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>My Work</h2>
          </header>


          <p>
            <a href='https://github.com/sarabastian/dev-builder' > dev-builder</a>
            <iframe width="400" height="315"
              src="https://www.youtube.com/embed/H8_LGSDINUk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



            <div>

              <a href='https://github.com/sarabastian/RVnB' > RVnB</a>
            </div>
            <iframe width="400" height="315"
              src="https://www.youtube.com/embed/JquRrALK-Dc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div>

              <a href='https://github.com/sarabastian/skinssentials-app' > skinssentials</a>
            </div>
            <iframe width="400" height="315" 
            src="https://www.youtube.com/embed/ifMWvp_605M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </p>

        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Let's chat! Shoot me a message for inquiries, a full resume, or just to say hi. </h2>
        </header>
        <form method="post" action="https://formspree.io/f/xvovevve">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="_replyto" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
        </form>
        {/* <Link to="/Elements"> Check out Elements page</Link> */}
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
