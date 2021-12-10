import React from 'react';
import APIS from '../service/apiService';

export const ExamList = ({ list, token, studentId }) => {
    const bookClickedHandler = (e, item) => {
        const { target } = e;
        target.style.display = "none";
        APIS.addExamBooking(token, { studentId: studentId, examId: item.id })
    }
    if (!studentId){
        return null;
    }
    return (
        <div>
            <ul>
                {
                    list.map((item) => {
                        return <li key={item.id}>
                            {
                                item.date + " " + item.startTime + " " + item.availableSlots + " " + item.count
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
