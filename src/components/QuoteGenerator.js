import React from "react";
import Button from "./Button";
import XIcon from '@mui/icons-material/X';


const QuoteGenerator = ({ RandomQuote, getQuoteIndex }) => {
return (
  <div id="quote-box">
    <div id="text">
      { RandomQuote ? `'${RandomQuote.quote}'` : ''  }
    </div> 
    <div id="author">
    { RandomQuote ? ` - ${RandomQuote.author}` : '' }
    </div>
    <div className='buttons'>
      <Button buttonSize="small" id="new-quote" onClick={getQuoteIndex} buttonDisplayName={'New Quote'} />
      <button id='x-btn'>
      <a  rel="noopener noreferrer" target="_blank" href="https://twitter.com/intent/tweet" id="tweet-quote"> 
        <XIcon size="" className='XIcon' />
        </a>
      </button>
    </div>
  </div>
);
}

export default QuoteGenerator;