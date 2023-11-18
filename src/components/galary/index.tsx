import { useEffect, useState } from "react"
import CarouselCollection from "../carousel/collection"
import { Item } from "../carousel/types"
import axios from "axios";
import "./galary.css"

export default function Galary() {
    const [page, setPage] = useState(1)
    const [items, setItems] = useState<Item[]>([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            // request data
            console.log({ ...process.env })
            const res = await axios.get(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&page=${page}`)
            setItems((items) => [...items, ...res.data])
            setLoading(false);
        })()
    }, [page])

    return <div className="">
        <div className="header-title">Community Feed</div>
        <CarouselCollection items={items} reachedEnd={() => { setPage(p => p + 1) }} loading={loading} />

    </div>
}