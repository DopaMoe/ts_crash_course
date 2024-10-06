import {useState} from "react";
import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

interface CourseGoalInterface {
    id: number;
    title: string;
    description: string;
}

export default function App() {
    // useState returns an array of 2 elements
    // first element is the current values that needs to be updated
    // second is a method that updates that value
    const [goals, setGoals] = useState<CourseGoalInterface[]>([]);

    function addGoalHandler() {
        // using set function to update the state
        return setGoals(pervGoals => {
            const newGoal: CourseGoalInterface = {
                id: Math.random(),
                title: "Learn React JS",
                description: "Learn it in depth"
            };
            return [...pervGoals, newGoal];
        });
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: "a list of goals"}}>
                <h1>Your Goals</h1>
            </Header>
            <button onClick={addGoalHandler}>Add Goal</button>
            {/*Whenever rendering a list use .map*/}
            <ul>
                {
                    goals.map(goal => (
                            <li key={goal.id}>
                                <CourseGoal title={goal.title}>
                                    <p>{goal.description}</p>
                                </CourseGoal>
                            </li>
                        )
                    )
                }
            </ul>
        </main>
    );
}
