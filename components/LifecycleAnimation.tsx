"use client"
import {ReactNode, useEffect, useRef, useState} from "react";

type AnimationKeyframes = {
    from: Keyframe,
    to: Keyframe
}

type LifecycleAnimationProps = {
    children: ReactNode,
    show: boolean,
    enter?: {
        keyframe: AnimationKeyframes,
        options: KeyframeAnimationOptions
    },
    exit?: {
        keyframe: AnimationKeyframes,
        options: KeyframeAnimationOptions
    }
}

const LifecycleAnimation = ({children, show, enter, exit}: LifecycleAnimationProps) => {
    const [display, setDisplay] = useState(show)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const showElement = () => {
            if(!enter) return setDisplay(true)
            setDisplay(true)
            if(!containerRef.current) return
            containerRef.current.animate([
                enter.keyframe.from,
                enter.keyframe.to
            ], {...enter.options, delay: undefined})
        }

        const hideElement = () => {
            if(!containerRef.current || !exit) return setDisplay(false)
            containerRef.current.animate([
                exit.keyframe.from,
                exit.keyframe.to
            ], {...exit.options, delay: undefined}).onfinish = () => setDisplay(false)
        }

        if(show)
            setTimeout(showElement, enter?.options.delay || 0)
        else
            setTimeout(hideElement, exit?.options.delay || 0)
    }, [show, display])

    return (
        display &&
        <div className="relative z-50 flex-1 flex-col flex" style={enter?.keyframe.from as any} ref={containerRef}>
            {children}
        </div>
    )
}

export default LifecycleAnimation;