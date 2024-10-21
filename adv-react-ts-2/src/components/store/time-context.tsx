import {createContext} from "react";
// managing states between components


// the type of state we want to manage
type Timer = {
    name: string,
    duration: number
}


// the state of the object with a list of the same object
type TimersState = {
    usRunning: boolean,
    timers: Timer[]
}

// the states + functions to manipulate the states
type TimerContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
}

const TimerContext = createContext<TimerContextValue | null>(null);