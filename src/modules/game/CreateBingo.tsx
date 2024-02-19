import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { EventItem } from "./components";
import { quotes } from "../../utils/quotes";
import { $break_point, $color, $cssTRBL, $uw } from "../../utils";
import { useTranslation } from "react-i18next";

type Props = {

}

export const CreateBingo:React.FC<Props> = React.memo(()=>{
    const [newEventText, setNewEventText] = useState("")
    const [events, setEvents] = useState<{id: string, text: string}[]>([])

    const [fontMult, setFontMult] = useState<number>(3);
    const [selected, setSelected] = useState<string>()
    let timeout: number | null= null;
    const areaRef = useRef<HTMLTextAreaElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const resize = useCallback(() => {
        if (timeout) clearTimeout(timeout);
        if (!containerRef.current || !spanRef.current) return;
        if(!newEventText.length) return
        const sample = containerRef.current.clientHeight / spanRef.current.clientHeight;
        console.log(containerRef.current.clientHeight, spanRef.current.clientHeight, sample);
        if (sample > 1.6) {
            setFontMult((prev) => prev + 0.07);
        } else if (sample <= 1 ) {
            setFontMult((prev) => prev - 0.05);
        } else {

            return;
        }

        timeout = setTimeout(() => resize(), 15);
    }, [newEventText]);


    const handleSelected = (id: string)=>{
        if(selected == id) {
            setSelected(undefined)
            return
        }
        setSelected(id);
        if(id!='add'){
            setFontMult(3)
        }
        focusArea()
        return;
    }

    useEffect(()=>{
        if(selected == 'add' || !selected){
            setNewEventText("")
            return
        }
        const found = quotes.find((quote)=> quote.id === selected);
        if(found) setNewEventText(found.text);
    }, [selected, selected])

    useEffect(()=>{
        resize()
    },[newEventText])

    const focusArea = ()=>{
        if(!areaRef) return;
        areaRef.current?.focus()

    }


    const { t } = useTranslation()

    return <Container>
        <CreationTile ref={containerRef} size={fontMult}>
            <textarea ref={areaRef} value={newEventText} onChange={e => setNewEventText(e.target.value)} />
            <span ref={spanRef} onClick={()=>focusArea()}  >{newEventText}</span>
        </CreationTile>

        <AddEvent onClick={()=>handleSelected('add')} >
            <span>{t(  selected  ? 'game.save_event' : 'game.add_event')}</span>
        </AddEvent>
        <EventList>
            {
            // events.map(
            //    (event)=> <EventItem event={event} />
            // )
                quotes.map((quote)=> <EventItem key={quote.id} selected={selected==quote.id} event={quote} onClick={()=> {handleSelected(quote.id)} } />)
            }
        </EventList>
    </Container>
})

const Container = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: ${$cssTRBL(0,2)};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const EventList = styled.div`
    width: 100%;
    height: ${$uw(18)};
    overflow-y: scroll;
    ${$break_point(980)}{
        height: ${$uw(28)};
    }
    ${$break_point(480)}{
        height: ${$uw(48)};
    }
`

const AddEvent = styled.div`
    width: 100%;
    padding: ${$cssTRBL(.2, 2)};
    box-sizing: border-box;
    border: 1px solid ${$color('black')};
    background-color:${$color('white')};
    margin-bottom: ${$uw(2)};
    border-radius: 8px;
    ${$break_point(480)}{
        margin-bottom:${$uw(4)}
    }
    > span {
        color: ${$color('black')};
    }
    
    &.selected{
        background-color:${$color('black')};
        > span{
            color: ${$color('white')};
        }
    }
`

const CreationTile = styled.div<{ size: number }>`
    box-sizing: border-box;
    border: 1px solid ${$color("black")};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${$cssTRBL(0.5)};
    width: ${$uw(6)};
    margin-bottom: ${$uw(3)};
    > textarea {
        position: absolute;
        z-index: 0;
        opacity: 0;
    }
    ${$break_point(980)}{
        width: ${$uw(7.2)};
        height:${$uw(6)};
    }
    ${$break_point(480)}{
        width: ${$uw(8.8)};
        height:${$uw(10.8)};
    }
    
    > span {
        z-index: 1;
        position: relative;
        width: 100%;
        margin: 0;
        overflow-wrap: break-word;
        max-width: 100%;
        overflow-wrap: break-word;
        padding: 0;
       
        font-family: inherit;
        line-height: 1.5;
        font-size: inherit;
        color: inherit;
        color: ${$color("black")};
        text-align: center;
        overflow: hidden;
        font-size: ${({ size }) => 1 * size}vw;
        ${$break_point(980)} {
            font-size: ${({ size }) => 1.2 * size}vw;
        }
        ${$break_point(480)} {
            font-size: ${({ size }) => 1.7 * size}vw;
        }
    }
    height:${$uw(5)};
`