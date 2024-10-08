import {type ReactNode} from "react";

// conditional props
interface HintInfoBox {
    mode: 'hint';
    children: ReactNode;
}

interface WarningInfoBoxProps {
    mode: 'warning';
    severity: "low" | "medium" | "high";
    children: ReactNode;
}

type InfoBoxProps = HintInfoBox | WarningInfoBoxProps
// conditional props

export default function InfoBox(props: InfoBoxProps) {
    const {mode, children} = props
    if (mode === 'hint') {
        return (
            <aside className={"infobox infobox-hint"}>
                <p>{children}</p>
            </aside>
        );
    }

    const {severity} = props
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    );
}