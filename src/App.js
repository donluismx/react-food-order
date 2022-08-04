import {Fragment} from 'react';
import MealSummary from './components/MealSummary';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <MealSummary />
    </Fragment>
  );
}

export default App;
