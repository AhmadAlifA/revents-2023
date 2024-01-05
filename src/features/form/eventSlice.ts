import { createSlice } from "@reduxjs/toolkit"
import { sampleData } from "../../app/api/sampleData"
import { AppEvent } from "../../app/types/event"

type State = {
    events: AppEvent[]
}

const initialState: State = {
    events: sampleData
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        creatEvent: (state, action) => {
            state.events.push(action.payload);
        },
        updateEvent: (state, action) => {
            state.events[state.events.findIndex(evt => evt.id === action.payload.id)] = action.payload
        },
        deleteEvent: (state, action) => {
            state.events.splice(state.events.findIndex(evt => evt.id === action.payload), 1)
        }
    }
}) 

export const {creatEvent, updateEvent, deleteEvent} = eventSlice.actions;
