import headshot from './wo.pic.jpg'
import PageTitle from "../PageTitle.tsx";
export default function Home(){
    return (
        <section aria-labelledby="home-title">
            <PageTitle page="Home" />
            <h2 id="home-title">Home</h2>
            <img src={headshot} alt="Run Liu" />
            <p>My name is Run Liu, and I am a full time student at Boston University. I am currently a senior majoring in Computer Science. I am a 21 years old male from Shanghai, China.</p>
            <p>
                Welcome to my website. This is my online resume used for cs391 and graduate school applications.
                You can find my <a href="/education">educations</a> and <a href="/employments">employments</a> here.
            </p>
        </section>
    )
}