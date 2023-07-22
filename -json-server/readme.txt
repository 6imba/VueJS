# Getting started:
    1.Install JSON Server
        > npm install -g json-server

    2.Create a db.json file with some data
        {
            "posts": [
                { "id": 1, "title": "json-server", "author": "typicode" }
            ],
            "comments": [
                { "id": 1, "body": "some comment", "postId": 1 }
            ],
            "profile": { "name": "typicode" }
        }

    3.Start JSON Server
        json-server --watch db.json

    4.open API-url:
        http://localhost:3000
        http://localhost:3000/posts
        http://localhost:3000/posts/1

# Reference:
    https://www.npmjs.com/package/json-server
    https://www.youtube.com/watch?v=vmvDkLSbtWM&list=PL8p2I9GklV45e7L_qC_mntM7FhSIV8pqa&index=44
    https://www.youtube.com/watch?v=u7dPGuGB0Kc&t=0s
    

