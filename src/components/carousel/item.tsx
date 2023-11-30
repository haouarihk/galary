import moment from "moment";
import Profile from "../../profile";
import "./item.css";
import { Item } from "./types";
import { nFormatter } from "../../util";


export default function CarouselItem(props: Item & { onSelect?: Function }) {
    const aspectRatio = props.width / props.height;

    return <div
        className="carousel-item"
        style={{
            aspectRatio: `${props.width} / ${props.height}`
        }}
        onClick={() => props.onSelect?.()}
    >
        <figure>
            <img src={props.urls.full} alt={`img-of-${props.description}`} style={
                {
                    background: props.color,
                    aspectRatio: `${props.width} / ${props.height}`,
                    contentVisibility: "auto",
                    containIntrinsicSize: props.width / aspectRatio + "px" /* Explained in the next section. */
                }
            } draggable={false} />
        </figure>
        <div className="carousel-info">
            <div className="carousel-quick-stats">
                <div>
                    {nFormatter(props.likes, 1)} Like{props.likes !== 1 ? "s" : ""}
                </div>

                <div>
                    <Profile {...props.user} sm>
                        <div>
                            {moment(props.created_at).fromNow()}
                        </div>
                    </Profile>
                </div>
            </div>
        </div>

        <span className="open">
            Open
        </span>

        <span className="stats">
            {props.likes}{"<3"}
        </span>
    </div>
}