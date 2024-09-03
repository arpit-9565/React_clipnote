import React,{useState} from 'react'


const CopyToClipboard = () => {
  const[text,setText]=useState('');
  async function handleclick(){
       navigator.clipboard.writeText(text);
  }

  return (
    <div>
      <h1>Enter text below</h1>
      <textarea onChange={(e)=>setText(e.target.value)}>
         
      </textarea>
      <button onClick={handleclick}>Copy to Clipboard</button>
    </div>
  )
}

export default CopyToClipboard
