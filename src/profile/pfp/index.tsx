import { ProfileImage } from "./types";
import "./pfp.css";

export default function PFP(props: ProfileImage & { alt: string; sm?: boolean }) {
    return <div className="pfp">
        <figure>
            <img src={props.sm ? props.small : props.medium} alt={`pfp-of-${props.alt}`} draggable={false} />
        </figure>
    </div>
}