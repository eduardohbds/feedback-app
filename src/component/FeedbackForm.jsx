import Card from "./shared/Card"


import { useState } from "react";
function FeedbackForm() {
    const [text, setText] = useState("")
    const handleTextChange = (e) =>{
        setText(e.target.value)
    }
  return (
    <Card>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
            <input 
            onChange={handleTextChange} 
            value={text} 
            type="text" 
            placeholder="Write your review here" />
            <button type="submit">Send</button>
        </div>
    </Card>
  )
}

export default FeedbackForm