import Menu from './components/Menu'
import InputsDisplayer from './components/InputsDisplayer'
import Footer from './components/Footer'

import './_app.scss'

function App() {
  return (
    <div className="app">
      <Menu />
      <InputsDisplayer />
      <Footer />
    </div>
  );
}

export default App;
