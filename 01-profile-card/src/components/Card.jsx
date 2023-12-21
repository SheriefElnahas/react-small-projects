import './Card.css';
import Info from './Info';
import Section from './Section';
import Footer from './Footer';
function Card({ name, titan, img, about, interests }) {
  return (
    <div className="card">
      <Info name={name} titan={titan} img={img} />
      <Section title="About" text={about} />
      <Section title="Interests" text={interests} />
      <Footer />
    </div>
  );
}

export default Card;
