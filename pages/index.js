import Link from 'next/link';
import banks from '../static/bank.json';
import cafes from '../static/cafe.json';
import groceries from '../static/grocery.json';
import homestays from '../static/homestay.json';
import hotels from '../static/hotel.json';
import restaurants from '../static/restaurant.json';

const Col = props => (
  <ul>
    <h1>{props.name}</h1>
  </ul>
);

const Index = props => (
  <div>

    <Col name='Bank'></Col>
    <ol>
      {props.bank.map(b => (
        <li key={`${b.name}`}>
          <a>{b.name}</a>
        </li>
      ))}   
    </ol>

    <Col name='Cafe'></Col>
    <ol>
      {props.cafe.map(c => (
        <li key={`${c.name}`}>
          <a>{c.name}</a>
        </li>
      ))}   
    </ol>

    <Col name='Grocery'></Col>
    <ol>
      {props.grocery.map(g => (
        <li key={`${g.name}`}>
          <a>{g.name}</a>
        </li>
      ))}   
    </ol>

    <Col name='Homestay'></Col>
    <ol>
      {props.homestay.map(hm => (
        <li key={`${hm.name}`}>
          <a>{hm.name}</a>
        </li>
      ))}   
    </ol>

    <Col name='Hotel'></Col>
    <ol>
      {props.hotel.map(ht => (
        <li key={`${ht.name}`}>
          <a>{ht.name}</a>
        </li>
      ))}   
    </ol>

    <Col name='Restaurant'></Col>
    <ol>
      {props.restaurant.map(r => (
        <li key={`${r.name}`}>
          <a>{r.name}</a>
        </li>
      ))}   
    </ol>

    <style jsx>{`
      ol { list-style-type: none; }
    `}</style>

  </div>
);

Index.getInitialProps = async function () {
  return {
    bank: banks,
    cafe: cafes,
    grocery: groceries,
    homestay: homestays,
    hotel: hotels,
    restaurant: restaurants
  };
};

export default Index;
