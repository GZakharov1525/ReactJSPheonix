import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="landing--CTA">
        {/* <img src={landingImage} alt='Poolside stonework'></img> */}
        <span>Let's Build Your Oasis.</span>
        <button id="btn--CTA">Get Started</button>
      </div>
      <div className="description">
        <h1>Honesty. Workmanship. Integrity.</h1>
        <p>
          Pheonix Landscaping Ltd. has been serving the Greater Toronto Area
          (GTA) since 2008, we are a small family business that prides itself on
          being client-focused and delivering high-quality stonework. Our
          workmanship is tailored for reliability in our harsh Ontario climate,
          we build your vision so that it stands the test of time. Blending
          European and North American techniques we aim for practical and
          elegant solutions to your design requests, and, if you are interested
          in a more contemporary design we have experience working with
          architects, designers and builders to take the project from blueprint
          to completion.
        </p>
        <p>
          Trusted for over a decade with providing professional hardscaping and
          landscaping to our community.

          Areas we frequently service: Toronto, Aurora, Newmarket, Richmond Hill,
          Markham, Vaughan, Etobicoke, Thornhill, Maple. We have worked all over
          York Region and the GTA, so if you dont see your city here please dont hesitate to
          contact us anyway!
        </p>
      </div>
    </div>
  );
};

export default Home;
