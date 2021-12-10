class API {
    async login(login, password) {
        const res = await fetch('/api/v1/auth/login', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                login: login,
                password: password
            })
        })
        return await res.json();
    }

    async fetchAllStudents(token) {
        const res = await fetch('/api/v1/student/all', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        return await res.json();
    }

    async fetchStudent(token, userId) {
        if (this.utils.hasEmpty(arguments)) {
            return  [];
        }
        const res = await fetch('/api/v1/student/' + userId, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        return await res.json();
    }

    async fetchInstructor(token, userId) {
        if (this.utils.hasEmpty(arguments)) {
            return  [];
        }
        const res = await fetch('/api/v1/instructor/' + userId, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        return await res.json();
    }

    async fetchAllExams(token, studentId) {
        if (this.utils.hasEmpty(arguments)) {
            return  [];
        }
        const res = await fetch('/api/v1/exam/all?studentId=' + studentId, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        return await res.json();
    }

    async fetchAllExamsBooking(token, studentId) {
        if (this.utils.hasEmpty(arguments)) {
            return  [];
        }
        const res = await fetch('/api/v1/exambooking/all?studentId=' + studentId, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            })
        })
        return await res.json();
    }

    async addExamBooking(token, data) {
        if (this.utils.hasEmpty(arguments)) {
            return  [];
        }
        const res = await fetch('/api/v1/exambooking/new', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(data)
        })
        return await res.json();
    }

    utils = {
        hasEmpty(args) {
            for (let i = 0; i < args.length; i++) {
                if (args[i] === null) {
                    return true;
                }
            }
            return false;
        }
    }
}

const APIS = new API()
export default APIS;