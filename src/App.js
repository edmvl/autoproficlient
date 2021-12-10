import {useEffect, useState} from 'react';
import {Header} from './components/Header';
import {ExamList} from './components/ExamList';
import APIS from './service/apiService';
import {LoginForm} from './components/LoginForm';
import {ExamBookingList} from './components/ExamBookingList';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [examList, setExamList] = useState([])
    const [examBookingList, setExamBookingList] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    const [studentId, setStudentId] = useState(localStorage.getItem('studentId'))
    const [instructorId, setInstructorId] = useState(localStorage.getItem('instructorId'))
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole'))
    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetchAllData(token, studentId, instructorId, userRole);
    }, [token, studentId, instructorId, userRole, userId])
    const fetchAllData = (ttoken, studentId, instructorId, userRole) => {
        userRole === "INSTRUCTOR" && APIS.fetchInstructor(token, instructorId).then(setUserData);
        userRole === "STUDENT" && APIS.fetchStudent(token, studentId).then(setUserData);
        APIS.fetchAllExams(token, studentId).then(setExamList);
        APIS.fetchAllExamsBooking(token, studentId).then(setExamBookingList);
    }
    if (!token) {
        return <LoginForm setToken={setToken} setUserRole={setUserRole} setUserId={setUserId}
                          setStudentId={setStudentId} setInstructorId={setInstructorId}/>
    }
    return (
        <div className="App">
            <Header userData={userData}/>
            {<ExamList list={examList} token={token} studentId={studentId}/>}
            {<ExamBookingList list={examBookingList} token={token}/>}
        </div>
    );

}

export default App;
