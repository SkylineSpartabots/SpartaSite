import HeaderBlock from "../components/HeaderBlock";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
       title: "Meeting",
       allday: true,
       start: new Date(2023, 6, 24, 13),
       end: new Date(2023, 6, 24, 16)

    },
    {
        title: "Meeting",
        allday: true,
        start: new Date(2023, 6, 25, 13),
        end: new Date(2023, 6, 25, 16)
 
     }
]

const CalendarPage = () => {  
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: "" })
    const [allEvents, setAllEvents] = useState(events)

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return ( 
        <div className="pt-[135px] bg-slate-100 flex flex-col items-center font-productsans">
            <HeaderBlock text="Calendar" />
            <Calendar 
                className=""
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccesor="end" 
                style={{width: 1300, height: 800, margin: "50px"}}
            />
        
            <h2 className="">Add New Event</h2>
            <div className="m-6">
                <input 
                    className="w-60 mr-2"
                    type="text"
                    placeholder="Add Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                />
                <DatePicker 
                    className="w-20 mr-2"
                    placeholderText = "Start Date"
                    selected={newEvent.start}
                    onChange={(start) => setNewEvent({...newEvent, start})}
                />
                <DatePicker 
                    className="w-20 mr-2"
                    placeholderText = "End Date"
                    selected={newEvent.end}
                    onChange={(end) => setNewEvent({...newEvent, end})}
                />
                <button className="mt-2 rounded-md bg-slate-300 p-2 hover:scale-110" onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
        </div>
      );
};

export default CalendarPage;