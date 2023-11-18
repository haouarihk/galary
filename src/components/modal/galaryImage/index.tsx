import clsx from "clsx";
import { Item } from "../../carousel/types";
import "./style.css";
import Profile from "../../../profile";
import moment from "moment";

export default function GalaryImageModal(props: Item & { closed?: boolean; close: () => void }) {
    return <>
        <div
            className={clsx("modal-backer", { "closed": props.closed })}
            onClick={props.close}
        >
        </div>

        <div className={clsx("modal-bg", { "closed": props.closed })}>
            <div className="modal modal-galary">
                {/* -- horizontal flex -- */}
                {/* image */}
                <div className="">
                    {/* <figure>
                        <img src={props.urls.full} alt={`img-of-${props.description}`} style={
                            {
                                background: props.color,
                                aspectRatio: `${props.width} / ${props.height}`,
                            }
                        } draggable={false} />
                    </figure> */}
                </div>

                {/* content */}
                <div>
                    {/* -- vertical flex -- */}
                    {/* user Profile */}
                    <div>
                        <Profile {...props.user} />
                    </div>

                    {/* post description */}
                    <div>
                        {props.description}
                    </div>


                    {/* stats */}

                    <div>
                        <div>
                            <div>
                                Created At:
                            </div>
                            <div>
                                {moment(props.created_at).format("MMM Do YY")}
                            </div>
                        </div>

                        <div>
                            <div>
                                Likes:
                            </div>
                            <div>
                                {props.likes}
                            </div>
                        </div>
                    </div>
                </div>
                {/* sponsors if there are */}
            </div>
        </div>
    </>
}