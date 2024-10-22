import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
        <p className="tagline">Weaving Dreams, One Stitch at a Time</p>
      </header>

      <section className="our-story">
        <h2>Our Story</h2>
        <img src="Ourstory.jpg" alt="Our Story" className="story-image" />
        <p>
          Welcome to YarnYards, where creativity meets community. We began our journey with a simple idea: to bring the beauty of crochet into everyone’s life. Our platform not only offers a wide range of handmade crochet products but also serves as a learning space for those who wish to master this timeless craft.
        </p>
        <p>
          YarnYards was born from a passion for crochet and a desire to support the artisans behind these intricate works. We are committed to creating a supportive community where creativity can flourish.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          <strong>Mission:</strong> To empower artisans and spread the joy of crochet through our unique platform that combines shopping and learning.
        </p>
        <p>
          <strong>Vision:</strong> To become the leading online space for crochet enthusiasts, fostering a community of creativity and craftsmanship.
        </p>
      </section>

      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <img src="whatweOffer.jpg" alt="What We Offer" className="offer-image" />
        <ul>
          <li>Shopping: Explore our wide range of handmade crochet products.</li>
          <li>Learning Platform: Start your crochet journey with our tutorials.</li>
        </ul>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-content">
          <img src="Whyus.webp" alt="Why Choose Us" className="choose-us-image" />
          <div className="why-choose-text">
            <p>
              We take pride in offering only the highest quality products, made with love by skilled artisans.
              By choosing YarnYards, you're supporting a community of women who are passionate about their craft.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <img src="image.png" alt="Testimonials" className="testimonials-image" />
        <blockquote>
          <p>"The quality of the crochet products is outstanding! I loved the intricate designs. Highly recommend!"</p>
          <footer>- Aarya Deore</footer>
        </blockquote>
        {/* Add more testimonials as needed */}
      </section>

      <section className="call-to-action">
        <h3>Join Our Community</h3>
        <p>Sign up for our newsletter to stay updated on new products and tutorials!</p>
        <p>Follow us on [Social Media Platforms]</p>
      </section>
    </div>
  );
};



export default About;
