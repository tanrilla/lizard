Endpoints:

1. GET: http://localhost:9080/lizard/api/v1/issue/getAll

response:
[
    {
        "id": 1,
        "summary": "1st issue",
        "description": "1st issue description",
        "dueDate": "2019-03-09T19:44:52.000+0000",
        "createdDate": "2019-03-09T19:44:40.000+0000",
        "modifiedDate": "2019-03-09T19:44:40.000+0000"
    },
    {
        "id": 9,
        "summary": "issue test 3",
        "description": "issue test",
        "dueDate": "2019-03-09T20:14:54.000+0000",
        "createdDate": "2019-03-09T20:14:54.000+0000",
        "modifiedDate": "2019-03-09T20:14:54.000+0000"
    }
]

2. http://localhost:9080/lizard/api/v1/issue/12

response:
{
    "id": 12,
    "summary": "1st issue",
    "description": "1st issue description",
    "project": {
        "id": 1,
        "name": "Lizard",
        "shortName": "LIZ"
    },
    "dueDate": "2019-03-09T19:44:52.000+0000",
    "createdDate": "2019-03-09T19:44:40.000+0000",
    "modifiedDate": "2019-03-09T19:44:40.000+0000",
    "priority": {
        "id": 1,
        "name": "P1"
    },
    "status": {
        "id": 1,
        "name": "OPEN"
    },
    "type": {
        "id": 1,
        "name": "Defect"
    },
    "assignee": {
        "id": 1,
        "firstName": "Cesar",
        "lastName": "K"
    },
    "labels": [
        {
            "id": 1,
            "name": "sprint1"
        },
        {
            "id": 2,
            "name": "my release"
        }
    ]
}

3. POST: http://localhost:9080/lizard/api/v1/issue

request:
{
	"summary": "issue test 1713",
	"description": "issue test",
	"dueDate": "2019-03-10T19:44:52.000+0000",
	"project": {
        "id": 1,
        "name": "Lizard",
        "shortName": "LIZ"
    }
}

4. PUT: http://localhost:9080/lizard/api/v1/issue

request:
{
    "id": 17,
	"summary": "issue test 1713",
	"description": "issue test",
	"dueDate": "2019-03-10T19:44:52.000+0000",
	"project": {
        "id": 1,
        "name": "Lizard",
        "shortName": "LIZ"
    }
}

Generate database dump:

./usr/local/mysql/bin/mysqldump -uroot -p lizard_db > /Users/cesar/Downloads/lizard_db-4.sql