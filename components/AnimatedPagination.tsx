"use client"
import {usePagination} from "@/contexts/PaginationContext";
import {Children, ReactNode, useEffect} from "react";
import LifecycleAnimation from "@/components/LifecycleAnimation";

type AnimationKeyframes = {
    from: Keyframe,
    to: Keyframe
}

type Animation = {keyframe: AnimationKeyframes, options: KeyframeAnimationOptions}

type PaginationProps = {
    children: ReactNode,
    animation: {
        enter: Animation[] | Animation,
        exit: Animation[] | Animation
    }
}

const getAnimation = (animation: Animation[] | Animation, index: number) => {
    if(animation instanceof Array)
        return index > (animation.length - 1) ? animation[Math.max(index % animation.length, 0)] : animation[index]

    return animation
}

const AnimatedPagination = ({children, animation}: PaginationProps) => {
    const {pageNum, setTotalPages} = usePagination()

    const childrenArray = Children.toArray(children)

    useEffect(() => {
        setTotalPages(childrenArray.length)
    }, [])

    return (
        <div className="flex-1 flex flex-col">
            {childrenArray.map((page, i) => (
                <LifecycleAnimation
                    key={i}
                    enter={!i ? undefined : getAnimation(animation.enter, i)}
                    exit={getAnimation(animation.exit, i)}
                    show={(pageNum - 1) === i}
                >
                    {page}
                </LifecycleAnimation>
            ))}
        </div>
    )
}

export default AnimatedPagination