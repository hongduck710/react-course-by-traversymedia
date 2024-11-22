import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";


function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    }

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to?")){
            setFeedback(feedback.filter((item) => item.id !== id));
        }

    }

    return (
        <Router>

            <Header  />
            <div className="container">
                <Route exact path="/">
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList  feedback={feedback} 
                    handleDelete={deleteFeedback }/>
                </Route>
                <Route path="/about" component={AboutPage} />

            </div>

        </Router>
    )
}

export default App;