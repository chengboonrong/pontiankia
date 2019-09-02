import data from '../static/grocery.json';
import Link from 'next/link';

const Grocerypage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/grocery/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Grocerypage.getInitialProps = async function() {
    const groceries = data;
    return {
      shows: groceries
    };
  };
  
export default Grocerypage;