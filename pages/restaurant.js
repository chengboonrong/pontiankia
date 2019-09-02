import data from '../static/restaurant.json';
import Link from 'next/link';

const Restaurantpage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/restaurant/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Restaurantpage.getInitialProps = async function() {
    const restaurants = data;
    return {
      shows: restaurants
    };
  };
  
export default Restaurantpage;