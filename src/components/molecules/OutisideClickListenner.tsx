import React, { useRef, useEffect, MutableRefObject } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter({ action, ref }: { ref: MutableRefObject<HTMLDivElement | null>, action: () => void }) {
    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (ref?.current && !ref.current?.contains(event.target as Node)) {
                action();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideClickListenner({ onOutsideClick, ...props }: React.PropsWithChildren<{}> & { onOutsideClick: () => void }) {
    const wrapperRef = useRef(null);
    useOutsideAlerter({ ref: wrapperRef, action: onOutsideClick });
    return <div ref={wrapperRef}>{props.children}</div>;
}