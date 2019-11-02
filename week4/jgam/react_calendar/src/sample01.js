import React from "react";
import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { HolidayAPI } from 'holidayapi';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k=>Views[k])
console.log(allViews);

/*
This is the API part
*/

const key = '2ff13222-6dea-4574-b601-a508811fb28e';
const holidayApi = new HolidayAPI({ key });

console.log(holidayApi["countries"]);
//holiday
// Fetch supported countries and subdivisions
/*
holidayApi.countries()
  .then((countries) => { console.log(countries); })
  .catch((err) => { console.error(err); });

// Fetch supported languages
holidayApi.languages()
  .then((languages) => { console.log(languages); })
  .catch((err) => { console.error(err); });

// Fetch holidays with minimum parameters
holidayApi.holidays({ country: 'JP', year: 2019 })
  .then((holidays) => { console.log(holidays); })
  .catch((err) => { console.error(err); });
*/
// Async? Await? No problem!
/*
(async () => {
  // Fetch supported countries and subdivisions
  const countries = await holidayApi.countries();

  // Fetch supported languages
  const languages = await holidayApi.languages();

  // Fetch holidays with minimum parameters
  const holidays = await holidayApi.holidays({
    country: 'JP',
    year: 2019,
  });

  console.log(holidays);
})();
*/
//holiday

const Sample01 = () => (
    <div style={{ height: 500}}>
        <Calendar
            events={[
                {
                    title: "work",
                    allDay: true,
                    start: new Date(2019, 1, 20, 10, 0),
                    end: new Date(2019, 1, 20, 10, 30)
                },
                {
                    title: "leave",
                    allDay: false,
                    start: new Date(2019, 1, 21, 17, 30),
                    end: new Date(2019, 1, 21, 17, 40)
                }
            ]}
            step={60}
            //view="week"//current view of the month
            //views={["month","week","work_week","day"]}
            views={[allViews[0], allViews[1],allViews[3]]}            
            min={new Date(2008, 0, 1, 8, 0)}//minimum time of the day and week views
            max={new Date(2020, 0, 17, 0, 0)}//maximum time of day and week views
            //date={new Date(2019, 1, 20)}
            localizer={localizer}
        />
    </div>
);

export default Sample01;