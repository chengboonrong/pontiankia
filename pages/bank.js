import data from '../static/bank.json';
import Link from 'next/link';

const Bankpage = props => (
    <div>
      <ul>
      {props.shows.map(show => (
        <li key={show.name}>
          <Link href={`/bank/${show.name}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image}></img>
        </li>
      ))}
    </ul>
    </div>
);

Bankpage.getInitialProps = async function() {
    const banks = data;
    return {
      shows: banks
    };
};
  
export default Bankpage;