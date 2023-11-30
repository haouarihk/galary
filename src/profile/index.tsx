import PFP from "./pfp";
import { User } from "./types";
import "./profile.css"
export default function Profile(props: User & { sm?: boolean, children?: any }) {
    return <div className="profile-sm">
        <PFP {...props.profile_image} alt={props.name} sm={props.sm} />
        <div className="profile-details">
            <p>
                {props.sm ? props.name.substring(0, 8) : props.name}
            </p>

            {
                props.children
            }
        </div>
    </div>
}