import "./item.css";


export default function CarouselItem(props: {
    name: string,
    image: string,
    collection: string
}) {
    return <div className="carousel-item">
        <figure>
            <img src={props.image} alt="Shoes" />
        </figure>
        <div>
            Test
        </div>
    </div>
}