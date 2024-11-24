import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackData from "./data/FeedbackData.js";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import Card from "./components/shared/Card.jsx";
import Post from "./components/Post.jsx";


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
                <Routes>
                    <Route 
                        exact 
                        path="/"
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList  feedback={feedback} 
                                handleDelete={deleteFeedback }/>
                            </>
                        }
                    />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/post/*" element={<Post />} />
                </Routes>
                <Card>
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </Card>

            </div>

        </Router>
    )
}

export default App;