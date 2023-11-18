import CarouselItem from "./item"
import { Item } from "./types"

import "./collection.css"
import { useEffect, useRef, useState } from "react"
import GalaryImageModal from "../modal/galaryImage"

export default function CarouselCollection(props: {
    items: Item[],
    reachedEnd: () => void,
    loading?: boolean
}) {
    const [selectedItem, setSelectedItem] = useState(0)
    const ref = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (!ref.current && props.loading) return;

        return respondToVisibility(ref.current, () => { });
    }, [ref, props.loading])
    return <>
        <div className="carousel-collection h-full">
            <div className="carousel-collection-inner">
                {props.items.map((item, i) => <CarouselItem
                    key={i}
                    {...item}
                    onSelect={() => setSelectedItem(i)}
                />)}

                {/* scroll inspector */}
                <div ref={ref} style={{
                    width: "100%"
                }}>

                </div>
            </div>
        </div>

        <GalaryImageModal {...(props.items[selectedItem] || {})} closed={selectedItem === -1} close={() => setSelectedItem(-1)} />

    </>
}

function respondToVisibility(element: any, callback: () => void) {

    const observer = new IntersectionObserver((entries, observer) => {
        callback();
        console.log("observed")
    }, {
        root: document.documentElement,
        threshold: 1, // Set the threshold appropriately
    });

    observer.observe(element);

    return () => {
        observer.disconnect()
    }
}