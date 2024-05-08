import { useState } from 'react';
import text from './data';


const App = () => {
const [count,setCount] = useState(1);
const [newText,setNewText] = useState([]);

const handleParagraphChange = (e)=>{
  setCount(e.target.value);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  let amount = parseInt(count);
  const slicedText = text.slice(0,amount);
  setNewText(slicedText);
}

  return (
    <section className='section-center'>
        <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        
          <label htmlFor="amount">
            paragraphs:
          </label>
          <input
            type="number"
            
            name="amount"
            id="amount"
            value={count}
            max='8'
            min='1'
            step='1'
            onChange={handleParagraphChange}
          />
          <button type="submit" className="btn">
            generate
          </button>
      </form>
      <article className='lorem-text'>
        {newText.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )};
export default App;
