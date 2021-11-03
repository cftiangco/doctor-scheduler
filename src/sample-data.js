const data =
    [
        {
            id: '1',
            description: 'Cardiologies',
            doctors: [
                {
                    id: 1, name: 'Dr. Steven Pua', time: '12:00PM to 5:30PM', notes: 'This is test notes 1',
                    reliever: null,
                    status: 'Coming',
                    queue: [
                        { id: 1, patient: 'Juan Dela Cruz' },
                        { id: 2, patient: 'John Doe' },
                        { id: 3, patient: 'Pedro Penduko' },
                    ]
                },
                {
                    id: 2, name: 'Dr. Karla Antonio', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 4, patient: 'Juan Dela Cruz' },
                        { id: 5, patient: 'Mikey Williams' }
                    ]
                },
            ]
        },
        {
            id: '2',
            description: 'Dermatologies',
            doctors: [
                {
                    id: 3, name: 'Dr. Marites Canceran', time: '12:00PM to 5:30PM', notes: 'This is test notes 1',
                    reliever: null,
                    status: 'Coming',
                    queue: [
                        { id: 6, patient: 'Juan Dela Cruz' },
                        { id: 7, patient: 'John Doe' },
                        { id: 8, patient: 'Pedro Penduko' },
                    ]
                },
                {
                    id: 4, name: 'Dr. Lenie Robredo', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 9, patient: 'Juan Dela Cruz' },
                        { id: 10, patient: 'Mikey Williams' }
                    ]
                },
                {
                    id: 5, name: 'Dr. Bongbong Marcos', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 11, patient: 'Juan Dela Cruz' },
                        { id: 12, patient: 'Mikey Williams' }
                    ]
                },
            ]
        },

        {
            id: '3',
            description: 'SCP',
            doctors: [
                {
                    id: 6, name: 'Dr. Marites Canceran', time: '12:00PM to 5:30PM', notes: 'This is test notes 1',
                    reliever: null,
                    status: 'Coming',
                    queue: [
                        { id: 13, patient: 'Juan Dela Cruz' },
                        { id: 14, patient: 'John Doe' },
                        { id: 15, patient: 'Pedro Penduko' },
                    ]
                },
                {
                    id: 7, name: 'Dr. Lenie Robredo', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 16, patient: 'Juan Dela Cruz' },
                        { id: 17, patient: 'Mikey Williams' }
                    ]
                },
                {
                    id: 9, name: 'Dr. Bongbong Marcos', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 18, patient: 'Juan Dela Cruz' },
                        { id: 19, patient: 'Mikey Williams' }
                    ]
                },
                {
                    id: 10, name: 'Dr. Bongbong Marcos', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 20, patient: 'Juan Dela Cruz' },
                        { id: 21, patient: 'Mikey Williams' }
                    ]
                },
                {
                    id: 11, name: 'Dr. Bongbong Marcos', time: '11:30PM to 3:30PM', notes: 'This is test notes 2',
                    reliever: 'Dr. Lebron James',
                    status: 'Ongoing',
                    queue: [
                        { id: 22, patient: 'Juan Dela Cruz' },
                        { id: 23, patient: 'Mikey Williams' }
                    ]
                },
            ]
        },
    ]


export default data;