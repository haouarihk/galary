import { ProfileImage } from "./types";
import "./pfp.css";

export default function PFP(props: ProfileImage & { alt: string }) {
    return <div className="pfp">
        <figure>
            <img src={props.medium} alt={`pfp-of-${props.alt}`} draggable={false} />
        </figure>
    </div>
}