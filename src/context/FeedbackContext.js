import { v4 as uuidv4 } from "uuid";
import {createContext, useState} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This item is from context",
            rating: 10
        },
        {
            id: 2,
            text: "안녕? 난 컴미야 💅",
            rating: 9
        },
        {
            id: 3,
            text: "안녕? 나는 미달이야 🍷",
            rating: 8
        }
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    // Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }

    // set item to be uploaded
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        });       
    }

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit
        }}
    >
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;