import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ExamList } from './components/ExamList';
import APIS from './service/apiService';
import { LoginForm } from './components/LoginForm';
import { ExamBookingList } from './components/ExamBookingList';
function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [examList, setExamList] = useState([])
    const [examBookingList, setExamBookingList] = useState([])
    const [userId, setUserId] = useState(localStorage.getItem('userId'))
    const [studentId, setStudentId] = useState(localStorage.getItem('studentId'))
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole'))
    const [userData, setUserData] = useState({})

    useEffect(() => {
        userRole === "INSTRUCTOR" && APIS.fetchInstructor(token, userId).then((data) => setUserData(data));
        userRole === "USER" && APIS.fetchStudent(token, userId).then((data) => setUserData(data));
        APIS.fetchAllExams(token, studentId).then((data) => setExamList(data));
        APIS.fetchAllExamsBooking(token, studentId).then((data) => setExamBookingList(data));
    }, [token, userId, userRole])

    return (
        <div className="App">
            <Header userData={userData} />
            {
                !token && <LoginForm setToken={setToken} setUserRole={setUserRole} setUserId={setUserId} setStudentId={setStudentId} />
            }
            {<ExamList list={examList} token={token} studentId={studentId} />}
            {<ExamBookingList list={examBookingList} token={token} />}
        </div>
    );

}

export default App;
