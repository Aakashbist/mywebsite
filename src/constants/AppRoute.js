import Home from "../components/Pages/LandingPage";
import Education from "../components/Pages/education/Education";
import Experience from "../components/Pages/experience/Experience";
import Skill from "../components/Pages/skill/Skill";

const HOME = "/";
const EXPERIENCE = '/experience';
const EDUCATION = '/education';
const SKILL = '/skill';


const PATHS =
    [
        {
            exact: true,
            link: HOME,
            text: "Home",
            component: Home
        },
        {
            link: EXPERIENCE,
            text: "Experience",
            component: Experience
        },
        {
            link: EDUCATION,
            text: "Education",
            component: Education
        },
        {
            link: SKILL,
            text: "Skill",
            component: Skill
        }
    ]

export default PATHS;