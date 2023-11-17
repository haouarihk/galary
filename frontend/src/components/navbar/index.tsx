export default function CarouselItem(props: {
    name: string,
    image: string,
    collection: string
}) {
    return <div className="carousel-item">
        <figure>
            <img src={props.image} alt={`image-of-${props.name}`} />
        </figure>
        <div>
            Test2
        </div>
    </div>
}