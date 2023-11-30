import { Item } from "../../carousel/types";
import Profile from "../../../profile";
import moment from "moment";
import Modal from "../modal";

import "./style.css";

export default function GalaryImageModal(props: Item & { closed?: boolean; close: () => void }) {
    return <Modal
        close={props.close}
        closed={props.closed}
    >{props.id && <>
        <div className="modal-fullscreen modal-galary">
            {/* -- horizontal flex -- */}
            {/* image */}
            <div className="modal-galary-image">
                <img
                    src={props.urls.full}
                    alt={`img-of-${props.description}`}
                    style={
                        {
                            background: props.color,
                            aspectRatio: `${props.width} / ${props.height}`,
                        }
                    }
                    draggable={false}
                />
            </div>

            {/* content */}
            <div className="modal-galary-details">
                {/* -- vertical flex -- */}
                {/* user Profile */}
                <div className="border-b-2">
                    <Profile {...props.user} />
                </div>

                {/* post description */}
                <div className="border-b-2 p-2">
                    {props.description}
                </div>


                {/* stats */}

                <div className="">
                    <div>
                        <div>
                            {moment(props.created_at).format("MMM Do YY")}
                        </div>
                    </div>

                    <div>
                        <span>
                            Likes:
                        </span>
                        <span>
                            {props.likes}
                        </span>
                    </div>
                </div>
            </div>
            {/* sponsors if there are */}
        </div></>}
    </Modal>
}