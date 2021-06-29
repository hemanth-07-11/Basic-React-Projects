import { Link } from 'react-router-dom';

import './Page.scss';

const MainPage = ({ quotes }) => {
  return quotes.map(quote => (
    <div className='quote' key={quote.id}>
      <div className='quote__text'>
        <p>"{quote.text}"</p>
      </div>
      <Link className='quote__link' to={`/author/${quote.author}`}>
        <div className='quote__author'>
          <p className='quote__name'>{quote.author}</p>
          <p className='quote__genre'>{quote.genre}</p>
        </div>
      </Link>
    </div>
  ));
};

export default MainPage;
