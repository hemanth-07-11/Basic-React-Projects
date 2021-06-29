import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import './Page.scss';

const AuthorPage = ({ getAllAuthorQuotes, quotes, fetchData }) => {
  const { author } = useParams();

  useEffect(() => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`)
      .then(response => response.json())
      .then(content => {
        getAllAuthorQuotes(content);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='authorPage'>
      <Link onClick={fetchData} className='back-button' to='/'>
        ← Back
      </Link>
      <h1 className='quote__name' style={{ marginLeft: 10 }}>
        {author}
      </h1>
      <ul>
        {quotes.map(quote => (
          <div key={quote._id || Math.random()} className='quote'>
            <div className='quote__text'>
              <p>{quote.quoteText}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AuthorPage;
