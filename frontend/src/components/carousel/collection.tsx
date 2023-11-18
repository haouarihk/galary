import CarouselItem from "./item"
import { Item } from "./types"

import "./collection.css"
import { useEffect, useRef } from "react"

export default function CarouselCollection(props: {
    items: Item[],
    reachedEnd: () => void,
    loading?: boolean
}) {
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!ref.current && props.loading) return;

        return respondToVisibility(ref.current, () => { });
    }, [ref, props.loading])
    return <div className="carousel-collection h-full">
        <div className="carousel-collection-inner">
            {props.items.map((item, i) => <CarouselItem key={i} {...item} />)}

            {/* scroll inspector */}
            <div ref={ref} style={{
                width: "100%"
            }}>

            </div>
        </div>
    </div>
}

function respondToVisibility(element: any, callback: () => void) {

    const observer = new IntersectionObserver((entries, observer) => {
        console.log({ entries })
        callback();
        console.log("observed")
    }, {
        root: document.documentElement,
        threshold: 0.5, // Set the threshold appropriately
    });

    observer.observe(element);

    return () => {
        observer.disconnect()
    }
}