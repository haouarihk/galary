import "./item.css";
import { Item } from "./types";


export default function CarouselItem(props: Item) {
    return <div className="carousel-item">
        <figure>
            <img src={props.image} alt="Shoes" draggable={false} />
        </figure>
        <div>
            {props.name}
        </div>
    </div>
}