import React from 'react';
import './App.css';
import QuoteForm from './Components/QuoteForm/QuoteForm';
import ResultsPage from './Components/ResultsPage/ResultsPage';

function App() {
  return (
    <div className="App">
      <QuoteForm />
      <ResultsPage />
    </div>
  );
}

export default App;
