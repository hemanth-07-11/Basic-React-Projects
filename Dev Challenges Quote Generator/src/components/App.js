import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import QuoteGenerator from './QuoteGenerator/QuoteGenerator';
import Footer from './Footer/Footer';
import AuthorPage from '../routes/AuthorPage';
import MainPage from '../routes/MainPage';

import './App.scss';
import './reset.scss';

function App() {
  const [data, setData] = useState([
    {
      id: '',
      text: '',
      author: '',
      genre: '',
    },
  ]);

  const fetchData = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then(response => response.json())
      .then(content => {
        const newQuote = content.data[0];
        setData([
          {
            id: newQuote._id,
            text: newQuote.quoteText,
            author: newQuote.quoteAuthor,
            genre: newQuote.quoteGenre,
          },
        ]);
      })
      .catch(err => console.log(err));
  };

 
  useEffect(() => {
    fetchData();
  }, []);

  const getAllAuthorQuotes = content => {
    const newQuotes = content.data;
    setData(newQuotes);
  };
  return (
    <>
      <main className='container'>
        <Router>
          <Switch>
            <Route path='/author/:author'>
              <AuthorPage
                getAllAuthorQuotes={getAllAuthorQuotes}
                quotes={data}
                fetchData={fetchData}
              />
            </Route>
            <Route path='/'>
              <QuoteGenerator fetchData={fetchData} />
              <MainPage quotes={data} />
            </Route>
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
