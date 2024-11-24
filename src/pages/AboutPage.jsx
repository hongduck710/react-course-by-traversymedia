import Card from "../components/shared/Card";
import {Link} from "react-router-dom";
function AboutPage(){
    return <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>피드백 작성을 위한 리액트 앱 프로젝트</p>
                <p>버전: 1.0.0</p>
                <p>
                    <Link to="/">Back To Home</Link>
                </p>
            </div>
        </Card>
    
}

export default AboutPage;