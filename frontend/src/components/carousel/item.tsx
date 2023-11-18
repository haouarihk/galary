import Profile from "../../profile";
import "./item.css";
import { Item } from "./types";


export default function CarouselItem(props: Item) {
    const aspectRatio = props.width / props.height;

    return <div className="carousel-item" style={{
        aspectRatio: `${props.width} / ${props.height}`
    }}>
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
        <div>
            <Profile {...props.user} />
        </div>

        <span className="open">
            Open
        </span>

        <span className="stats">
            {props.likes}{"<3"}
        </span>
    </div>
}