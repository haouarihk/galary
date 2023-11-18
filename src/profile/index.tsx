import PFP from "./pfp";
import { User } from "./types";
import "./profile.css"
export default function Profile(props: User & { sm?: boolean }) {
    return <div className="profile-sm">
        <PFP {...props.profile_image} alt={props.name} sm={props.sm} />
        <p>
            {props.sm ? props.name.substring(0, 8) : props.name}
        </p>
    </div>
}