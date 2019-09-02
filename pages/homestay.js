import data from '../static/homestay.json';
import Link from 'next/link';

const Homestaypage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/homestay/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Homestaypage.getInitialProps = async function() {
    const homestays = data;
    return {
      shows: homestays
    };
  };
  
export default Homestaypage;