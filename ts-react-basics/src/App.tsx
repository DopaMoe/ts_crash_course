import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

export default function App() {
    return (
        <main>
            <Header image={{src: goalsImg, alt: "a list of goals"}}>
                <h1>Your Goals</h1>
            </Header>
            <CourseGoal title="Hola">
                <p>Greetings!</p>
            </CourseGoal>
        </main>
    );
}
