import CourseGoal from "./CourseGoal.tsx";
import {type Goals} from "../App.tsx";

interface CourseGoalListProps {
    goals: Goals[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul>
            {
                goals.map(goal => (
                        <li key={goal.id}>
                            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
                                <p>{goal.description}</p>
                            </CourseGoal>
                        </li>
                    )
                )
            }
        </ul>
    );
}