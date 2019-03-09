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

2. GET: http://localhost:9080/lizard/api/v1/issue?id=2

response:
{
    "id": 2,
    "summary": "issue test",
    "description": "issue test",
    "dueDate": "2019-03-09T20:10:11.000+0000",
    "createdDate": "2019-03-09T20:10:11.000+0000",
    "modifiedDate": "2019-03-09T20:10:11.000+0000"
}

3. POST: http://localhost:9080/lizard/api/v1/issue

request:
{
	"summary": "issue test 5",
	"description": "issue test",
	"dueDate": "2019-03-10T19:44:52.000+0000"
}

response:
{
    "id": 11, --> generated key
    "summary": "issue test 5",
    "description": "issue test",
    "dueDate": null,
    "createdDate": null,
    "modifiedDate": null
}

4. PUT: http://localhost:9080/lizard/api/v1/issue

request:
{
    "id": 12,
    "summary": "issue test 222",
    "description": "issue test",
    "dueDate": "2019-03-11T19:44:52.000+0000"
}

response:
{
    "id": 12,
    "summary": "issue test 222",
    "description": "issue test",
    "dueDate": "2019-03-11T19:44:52.000+0000",
    "createdDate": null,
    "modifiedDate": null
}