import data from '../static/hotel.json';
import Link from 'next/link';

const Hotelpage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/hotel/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Hotelpage.getInitialProps = async function() {
    const hotels = data;
    return {
      shows: hotels
    };
  };
  
export default Hotelpage;