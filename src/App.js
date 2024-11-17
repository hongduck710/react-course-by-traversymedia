import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData.js";


function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header  />
            <div className="container">
                <FeedbackList  feedback={feedback} />
            </div>

        </>
    )
}

export default App;