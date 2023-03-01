//  Design database for Zen class programme

db.zenclass.insertMany([
    {
        "id": "1",
        "users" :"user1",
        "codekata" : 53,
        "attendance" :"present",
        "topics" :"FSD",
        "task" :Date("2020-10-1T16:00:00Z"),
        "company_drives" : Date("2020-10-1T16:00:00Z"),
        "mentors" : 16,
        "drives": "Company_A"
    },
    {
        "id": "2",
        "users" :"user2",
        "codekata" : 58,
        "attendance" :"present",
        "topics" :"FSD",
        "task" :Date("2020-07-18T16:00:00Z"),
        "company_drives" : Date("2020-05-18T16:00:00Z"),
        "mentors" : 25,
        "drives": "Company_A"
    },
    {
        "id": "3",
        "users" :"user3",
        "codekata" : 63,
        "attendance" :"absent",
        "topics" :"FSD",
        "task" :Date("2020-05-18T16:00:00Z"),
        "company_drives" : Date("2020-10-18T16:00:00Z"),
        "mentors" : 14,
        "drives": "Company_A"
    },
    {
        "id": "4",
        "users" :"user4",
        "codekata" : 53,
        "attendance" :"present",
        "topics" :"FSD",
        "task" :Date("2020-10-18T16:00:00Z"),
        "company_drives" : Date("2020-10-18T16:00:00Z"),
        "mentors" : 17,
        "drives": "Company_A"
    },
    {
        "id": "5",
        "users" :"user5",
        "codekata" : 53,
        "attendance" :"absent",
        "topics" :"FSD",
        "task" :Date("2020-06-22T16:00:00Z"),
        "company_drives" : Date("2020-06-22T16:00:00Z"),
        "mentors" : 18,
        "drives": "Company_A"
    },
    {
        "id": "6",
        "users" :"user6",
        "codekata" : 74,
        "attendance" :"absent",
        "topics" :"FSD",
        "task" :Date("2020-10-28T16:00:00Z"),
        "company_drives" : Date("2020-10-30T16:00:00Z"),
        "mentors" : 13,
        "drives": "Company_A"
    }
])

// 1. Find all the topics and tasks which are thought in the month of October
    db.zenclass.find({_id:0,topics:1,task:{$gte:Date("2020-10-1T16:00:00Z"),$lte:Date("2020-10-31T16:00:00Z")}})

// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
    db.zenclass.find({company_drives:{$lt:Date("2020-10-15T16:00:00Z"),$gt:Date("2020-10-31T16:00:00Z")}})

// 3. Find all the company drives and students who are appeared for the placement.
    db.zenclass.find({_id:0,user:1,company_drives:1})

// 4. Find the number of problems solved by the user in codekata
    db.zenclass.find({$sum:{codekata:1}})

// 5. Find all the mentors with who has the mentee's count more than 15
    db.zenclass.find({mentors:{$gt:15}})

// 6. Find the number of users who are absent and task is not submitted  between 15-oct-2020 and 31-oct-2020
db.users.find({ $and: [{ attendance: "absent", deadline: { $gte:Date("2020-10-15T16:00:00Z"), $lte: Date("2020-10-31T16:00:00Z") }}]})