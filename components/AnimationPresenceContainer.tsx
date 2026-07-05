"use client"
import React, {PropsWithChildren} from 'react';
import {AnimatePresence, AnimatePresenceProps} from "framer-motion";

const AnimationPresenceContainer = ({children, ...props}: PropsWithChildren<AnimatePresenceProps>) => {
    return (
        <AnimatePresence {...props}>
            {children}
        </AnimatePresence>
    );
};

export default AnimationPresenceContainer;