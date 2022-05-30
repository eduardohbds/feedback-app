import FeedbackItem from "./FeedbackItem"


function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return (<>
        <div className="card">
                <div className="text">
                <h2>No feedback yet</h2>
                </div>
            </div>
            </>)
    }
    return (
    <div className="feedback-list">
        {feedback.map((item)=>(
            <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList