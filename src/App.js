import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import FeedbackStats from "./components/FeedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import Card from "./components/shared/Card.jsx";
// import Post from "./components/Post.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.js";


function App() {
   

    return (
        <FeedbackProvider>
            <Router>
                <Header  />
                <div className="container">
                    <Routes>
                        <Route 
                            exact 
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats   />
                                    <FeedbackList />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        {/* <Route path="/post/*" element={<Post />} /> */}

                    </Routes>
                    <Card>
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </Card>
                     <AboutIconLink />           
                </div>

            </Router>
        </FeedbackProvider>
    )
}

export default App;