import data from '../static/cafe.json';
import Link from 'next/link';

const Cafepage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/cafe/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Cafepage.getInitialProps = async function() {
    const cafes = data;
    return {
      shows: cafes
    };
  };
  
export default Cafepage;