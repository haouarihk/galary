import PFP from "./pfp";
import { User } from "./types";
import "./profile.css"
export default function Profile(props: User) {
    return <div className="profile-sm">
        <PFP {...props.profile_image} alt={props.name} />
        <p>
            {props.name}
        </p>
    </div>
}