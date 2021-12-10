import React from 'react';
import APIS from '../service/apiService';

export const ExamBookingList = ({list, token}) => {
    const bookClickedHandler = (e, item) => {
        const { target } = e;
        target.style.display = "none";
        APIS.addExamBooking(token, { id: item.id })
    }
    return (
        <div>
            <ul>
                {
                    list.map((item) => {
                        return <li key={item.id}>
                            {
                                item.date + " " + item.time + " " + item.instructor
                            }
                            {
                                !item.booked && item.count > 0 && <button onClick={(e) => bookClickedHandler(e, item)}>Забронировать</button>
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}