import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

export const P5Wrapper = ({ sketch }) => {
    const canvasRef = useRef();

    useEffect(() => {
        new p5(sketch, canvasRef.current);
    }, [sketch]);

    return <div ref={canvasRef} />;
};
