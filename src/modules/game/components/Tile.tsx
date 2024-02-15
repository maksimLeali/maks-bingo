import React, { useCallback,  useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { $break_point, $color, $cssTRBL } from "../../../utils";

export const Tile: React.FC<{ text: string }> = React.memo(({ text }) => {
    const [fontMult, setFontMult] = useState<number>(3);
    const [sizeOk, setSizeOk] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    let timeout: number | null= null;

    const resize = useCallback(() => {
        if (timeout) clearTimeout(timeout);
        if (!containerRef.current || !spanRef.current) return;

        const sample = containerRef.current.clientHeight / spanRef.current.clientHeight;
        console.log(containerRef.current.clientHeight, spanRef.current.clientHeight, sample);
        if (sample > 1.5) {
            setFontMult((prev) => prev + 0.02);
        } else if (sample <= 1 ) {
            setFontMult((prev) => prev - 0.02);
        } else {
            setSizeOk(true);
            return;
        }

        timeout = setTimeout(() => resize(), 10);
    }, []);

    useEffect(() => {
        if (!sizeOk) resize();
    }, [sizeOk, resize]);

    return (
        <Container ref={containerRef} size={fontMult}>
            <span ref={spanRef} className={sizeOk ? 'visible' : ''}>{text}</span>
        </Container>
    );
});

const Container = styled.div<{ size: number }>`
    box-sizing: border-box;
    border-right: 1px solid ${$color("black")};
    border-top: 1px solid ${$color("black")};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${$cssTRBL(0.5)};
    > span {
        opacity: 0;
        color: ${$color("black")};
        font-size: ${({ size }) => 1 * size}vw;
        &.visible{
            opacity: 1;
        }
        ${$break_point(980)} {
            font-size: ${({ size }) => 1.2 * size}vw;
        }
        ${$break_point(480)} {
            font-size: ${({ size }) => 1.7 * size}vw;
        }
    }
`;
