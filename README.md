# lizard
issue tracker

**Build**

`mvn clean install`

**Run**

`java -jar java-boilerplate-1.0-SNAPSHOT.jar`

**Test**

- GET: http://localhost:8080/getPerson?id=1
- GET: http://localhost:8080/getAllPersons
- PUT: http://localhost:8080/createPerson
request: { "name": "maria" }
response: { "id": 6, "name": "maria"}
- POST: http://localhost:8080/updatePerson
request: { "id": 6, "name": "renzo"}
response: { "id": 6, "name": "renzo"}
- DELETE: http://localhost:8080/deletePerson?id=6