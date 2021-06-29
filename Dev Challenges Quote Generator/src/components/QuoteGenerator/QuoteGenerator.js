import './QuoteGenerator.scss';
import refresh from '../../Refresh.png';
const QuoteGenerator = ({ fetchData }) => {
  return (
    <button className='random__button' onClick={fetchData}>
      Random
      <img className='random__image' src={refresh} alt='huj' />
    </button>
  );
};

export default QuoteGenerator;
