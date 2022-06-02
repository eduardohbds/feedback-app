import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

function FeedbackList({ feedback, handleDelete }) {
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
            {feedback.map((item) => (
                <FeedbackItem 
                key={item.id} 
                item={item} 
                handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            rating: PropTypes.string.isRequired,
            text: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList