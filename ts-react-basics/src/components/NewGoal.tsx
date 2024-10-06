import {type FormEvent, useRef} from "react";

interface NewGoalProps {
    onAddGoal: (goal: string, summary: string) => void;

}

export default function NewGoal({onAddGoal}: NewGoalProps) {
    // using ref to access form element
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);

    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // you can extract data using FormData as below
        // and then giving name props to the input and accessing by the names
        // const form = new FormData(event.currentTarget)

        const enteredGoal = goal.current!.value;
        const enteredSummary = goal.current!.value;
        // resetting form elements after extracting values
        event.currentTarget.reset(); // best practices!
        onAddGoal(enteredGoal, enteredSummary);
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short Summary</label>
                <input id="summary" type="text" ref={summary}/>
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    );
}