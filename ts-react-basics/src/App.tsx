import {useState} from "react";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";

export interface Goals {
    id: number;
    title: string;
    description: string;
}

export default function App() {
    // useState returns an array of 2 elements
    // first element is the current values that needs to be updated
    // second is a method that updates that value
    const [goals, setGoals] = useState<Goals[]>([]);

    function addGoalHandler() {
        // using set function to update the state
        return setGoals(pervGoals => {
            const newGoal: Goals = {
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
            <CourseGoalList goals={goals}/>
        </main>
    );
}
