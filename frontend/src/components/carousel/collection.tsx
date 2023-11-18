import CarouselItem from "./item"
import { Item } from "./types"

import "./collection.css"

export default function CarouselCollection(props: {
    items: Item[]
}) {
    return <div className="carousel-collection">
        <div className="carousel-collection-inner">
            {props.items.map((item, i) => <CarouselItem key={i} {...item} />)}
        </div>
    </div>
}