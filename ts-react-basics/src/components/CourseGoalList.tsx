import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import {type Goals} from "../App.tsx";
import {type ReactNode} from "react";

interface CourseGoalListProps {
    goals: Goals[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    if (goals.length === 0) {
        return (
            <InfoBox mode={"hint"}>
                Start Adding Some Goals!
            </InfoBox>
        );
    }
    let warningBox: ReactNode;
    if (goals.length >= 4) {
        warningBox = <InfoBox mode={"warning"} severity={"low"}>You're doing too much man!</InfoBox>;
    }
    return (
        <>
            {warningBox}
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
        </>
    );
}