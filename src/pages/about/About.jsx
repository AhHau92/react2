import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpeg'
import StoryImage from '../../images/about1.jpeg'
import VisionImage from '../../images/about2.jpeg'
import MissionImage from '../../images/about3.jpeg'

import React from 'react'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis rem, incidunt voluptatibus amet doloribus sed eius asperiores cum ab.
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque. Aut sit quia maiores voluptatum rerum, tempora corporis, illo dignissimos delectus odit itaque ipsa officia, eos molestiae nobis quo quas quis laudantium adipisci! Nostrum minima molestiae vel possimus? Earum, qui?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus? Reprehenderit dolor voluptates illum molestiae molestias excepturi laudantium autem fuga nobis minima praesentium maxime dolores, odit iure labore, exercitationem asperiores.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iusto accusantium facilis!</p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque. Aut sit quia maiores voluptatum rerum, tempora corporis, illo dignissimos delectus odit itaque ipsa officia, eos molestiae nobis quo quas quis laudantium adipisci! Nostrum minima molestiae vel possimus? Earum, qui?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus? Reprehenderit dolor voluptates illum molestiae molestias excepturi laudantium autem fuga nobis minima praesentium maxime dolores, odit iure labore, exercitationem asperiores.</p>
        </div>
      
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Story" />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, itaque. Aut sit quia maiores voluptatum rerum, tempora corporis, illo dignissimos delectus odit itaque ipsa officia, eos molestiae nobis quo quas quis laudantium adipisci! Nostrum minima molestiae vel possimus? Earum, qui?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, delectus? Reprehenderit dolor voluptates illum molestiae molestias excepturi laudantium autem fuga nobis minima praesentium maxime dolores, odit iure labore, exercitationem asperiores.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iusto accusantium facilis!</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About