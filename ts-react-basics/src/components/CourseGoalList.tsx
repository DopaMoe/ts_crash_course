import CourseGoal from "./CourseGoal.tsx";
import {type Goals} from "../App.tsx";

interface CourseGoalListProps {
    goals: Goals[];
};

export default function CourseGoalList({goals}: CourseGoalListProps) {
    return (
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
    );
}