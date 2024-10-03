// good practice to add type keyword when dealing with children! so that the compiler knows that this is a react package
import {type PropsWithChildren, type ReactNode} from "react";

interface CourseGoalProps {
    title: string;
    children: ReactNode;
}

// alternative way to define properties with childrens
// define a generic type with PropsWithChildren and put all the extra props inside
// type CourseGoalProps = PropsWithChildren<{ title: string }>;
export default function CourseGoal({title, children}: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button>Delete</button>
        </article>
    );
}