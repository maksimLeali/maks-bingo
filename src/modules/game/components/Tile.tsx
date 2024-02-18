import React, { useCallback,  useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { $break_point, $color, $cssTRBL } from "../../../utils";
import { useAppContext } from "../../../contexts";

export const Tile: React.FC<{ text: string }> = React.memo(({ text }) => {
    const [fontMult, setFontMult] = useState<number>(3);
    const [sizeOk, setSizeOk] = useState(false);
    const spanRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    let timeout: number | null= null;
    const [clicked, setClicked] = useState(false)
    const { themeMode } = useAppContext()
    const resize = useCallback(() => {
        if (timeout) clearTimeout(timeout);
        if (!containerRef.current || !spanRef.current) return;

        const sample = containerRef.current.clientHeight / spanRef.current.clientHeight;
        console.log(containerRef.current.clientHeight, spanRef.current.clientHeight, sample);
        if (sample > 1.6) {
            setFontMult((prev) => prev + 0.07);
        } else if (sample <= 1 ) {
            setFontMult((prev) => prev - 0.05);
        } else {
            setSizeOk(true);
            return;
        }

        timeout = setTimeout(() => resize(), 15);
    }, []);

    useEffect(() => {
         resize();
    }, []);

    return (
        <Container ref={containerRef} size={fontMult} mode={ themeMode } className={clicked ? 'clicked' : ''} onClick={()=> setClicked(true)}>
            <span ref={spanRef} className={sizeOk ? 'visible' : ''}>{text}</span>
        </Container>
    );
});

const Container = styled.div<{ size: number, mode: 'dark' | 'light' }>`
    box-sizing: border-box;
    border-right: 1px solid ${$color("black")};
    border-top: 1px solid ${$color("black")};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${$cssTRBL(0.5)};
    &.clicked{

        background-image: url("stroke_${({mode})=>mode}.png");
        background-size:     contain;
        background-repeat:   no-repeat;
        background-position: center center; 
    }
    > span {
        opacity: 0;
        color: ${$color("black")};
        text-align: center;
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
