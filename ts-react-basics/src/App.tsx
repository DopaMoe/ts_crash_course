import {useState} from "react";
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";

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

    function addGoalHandler(goal: string, summary: string) {
        // using set function to update the state
        return setGoals(pervGoals => {
            const newGoal: Goals = {
                id: Math.random(),
                title: goal,
                description: summary
            };
            return [...pervGoals, newGoal];
        });
    }

    function deleteGoalHandler(goalId: number) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== goalId));
    }

    return (
        <main>
            <Header image={{src: goalsImg, alt: "a list of goals"}}>
                <h1>Your Goals</h1>
            </Header>
            <NewGoal onAddGoal={addGoalHandler}/>
            <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler}/>
        </main>
    );
}
