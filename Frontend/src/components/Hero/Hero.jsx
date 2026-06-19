import "./Hero.css";
import {useNavigate} from 'react-router-dom'
function Hero() {
  const navigate = useNavigate()
  return (
    
    <section className="hero" id="hero">
      
      <div className="hero-content">
        <span className="hero-tag">
          VALUE GENERATION FRAMEWORK
        </span>

        <h2 id="headEff">
          Transforming Operational Challenges
          <br />
          Into Measurable Business Value
        </h2>
         <hr id="line"></hr>
        <p id="paraHOver">
         
          Reduce risk | Improve resilience | Optimize
          Performance| Create sustainable value.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={()=>navigate('/Framework')}>
            Explore Framework
          </button>

          <button className="secondary-btn" onClick={()=>navigate('/Contact')}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;



