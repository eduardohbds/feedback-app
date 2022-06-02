import { useState } from "react";
import FeedbackList from "./component/FeedbackList";
import FeedbackData from "./data/FeedbackData"
import Header from "./component/Header";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";



function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id)=>{
        if (window.confirm("Are you sure to delete?")) {
            setFeedback(feedback.filter((item)=>
                item.id !== id
            ))
        }
    }
    return (
        <>
        <Header />
        <div className="container">
            <FeedbackForm/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback = {feedback}
                    handleDelete={deleteFeedback}/>    
        </div>
        </>
    )
        
}
export default App;