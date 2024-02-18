import React, { useState } from "react";
import styled from "styled-components";
import { EventItem } from "./components";
import { quotes } from "../../utils/quotes";
import { $color, $cssTRBL, $uw } from "../../utils";
import { useTranslation } from "react-i18next";

type Props = {

}

export const CreateBingo:React.FC<Props> = React.memo(()=>{
    
    const [events, setEvents] = useState<{id: string, text: string}[]>([])
    const [selected, setSelected] = useState<string>()
    
    const handleSelected = (id: string)=>{
        if(selected == id) {
            setSelected(undefined)
            return
        }
        setSelected(id);
        return;
    }

    const { t } = useTranslation()

    return <Container>
        <EventList>
                <AddEvent>
                    <span>{t('game.add_event')}</span>
                </AddEvent>
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

`

const EventList = styled.div`
    width: 100%;
    height: ${$uw(18)};
    overflow-y: scroll;
`

const AddEvent = styled.div`
    width: 100%;
    padding: ${$cssTRBL(.2, 2)};
    box-sizing: border-box;
    border: 1px solid ${$color('black')};
    background-color:${$color('white')};
    margin-bottom: ${$uw(1)};
    border-radius: 8px;
    > span {
        color: ${$color('black')};
    }
`