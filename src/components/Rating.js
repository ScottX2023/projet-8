import redStar from '../assets/redstar.png'
import greyStar from '../assets/greystar.png'
import '../sass/modules/rating.scss'

function Rating({ rating }) {
  const generateStars = () => {
    // création d'un tableau pour afficher le rating, attribution d'étoiles rouges ou grises en fonction de la notation de l'hôte
    return [...Array(5)].map((_, index) => (
      <img
        key={index}
        src={index < rating ? redStar : greyStar}
        alt="star"
        className="accomodation_content_host_stars"
      />
    ));
  };

  return (
    <div className="accomodation_content_host_stars">
      {generateStars()}
    </div>
  );
}

export default Rating;