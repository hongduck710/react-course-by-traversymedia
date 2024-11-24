import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem.jsx";
import FeedbackContext from "../context/FeedbackContext.js";

function FeedbackList({ handleDelete }){
    const { feedback } = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0){
        return <p>피드백이 없어요!</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) =>(
                    <motion.div 
                        key={item.id}
                        initial={{opacity: 0}}
                        animate={{opacity:1}}
                        exit={{opacity: 0}}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    /*
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem 
                key={ item.id } 
                item={ item } 
                handleDelete={ handleDelete } 
                />
            ))}
        </div>
    )
    */
}

export default FeedbackList;