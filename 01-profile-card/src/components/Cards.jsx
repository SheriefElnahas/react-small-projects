import charactersInfo from '../data';
import Card from './Card';

function Cards() {
  return (
    <section className="cards">
      {charactersInfo.map(({ name, titan, img, about, interets }) => {
        return <Card name={name} titan={titan} img={img} about={about} interests={interets} key={name} />;
      })}
    </section>
  );
}

export default Cards;
