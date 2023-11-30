import clsx from "clsx";
import './style.css';

export default function Modal(props: { children?: any, closed?: boolean, fullScreen?: boolean, close: () => void }) {
    return <>
        <div
            className={clsx("modal-backer", { "closed": props.closed })}
            onClick={props.close}
        >
        </div>

        <div className={clsx("modal-bg", { "closed": props.closed, "modal-bg-fullscreen": props.fullScreen })}>
            <div onClick={props.close}>x</div>

            {props.children}
        </div>

    </>
}