# Lab 07
## bearer-auth
Author: Sham Al-Jalam

* deployed application : [https://bearer-auth-tbex.onrender.com/](https://bearer-auth-tbex.onrender.com/)

* Github actions: [https://github.com/ShamAhmad2022/bearer-auth/actions](https://github.com/ShamAhmad2022/bearer-auth/actions)

*  pull request: [https://github.com/ShamAhmad2022/bearer-auth/pull/1](https://github.com/ShamAhmad2022/bearer-auth/pull/1)

### Setup:
.env requirements:

`DATABASE_URI`

`SECRET`

### Running the app:
* npm start

* Endpoint: /

    * Returns Object
    ```Js
    {
        "code": 200,
        "message": "Welcome to Home page :)"
    }
    ```

* Endpoint: /signup

    * Returns Object
    ```Js
    {
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InhqMnluU3Y3Lzl5UWwyRTBWYnVZMGJETVJLZmc5VGw1bithMDIrQ2pxTlk9IiwiaXYiOiJ5elUxUnlmayt4b2V2bHM4YUo1K2RRPT0iLCJpYXQiOjE2ODg0OTA3NDh9.q80c9TsBw9pK2TGJaMMwFUbWStJYlaYGW6gCkvd3ZlA",
        "id": 18,
        "username": "Dazai",
        "password": "$2b$10$fZXjeZ2J6DtTdp3MWCIpguhf4D8/bBghhjnd8U5qDHqimAonQEj/i",
        "createdAt": "2023-07-04T17:09:52.278Z",
        "updatedAt": "2023-07-04T17:09:52.278Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InhqMnluU3Y3Lzl5UWwyRTBWYnVZMGJETVJLZmc5VGw1bithMDIrQ2pxTlk9IiwiaXYiOiJmU0pmbFRmdHNtV2dadEwySUFjUXF3PT0iLCJpYXQiOjE2ODg0OTA3NDh9.Ysk-dKCBQ8A-t02DlWLb6g4QICMiP0yhQx16Cp715E0"
    }
    ```
* Endpoint: /signin

    * Returns Object
    ```Js
    {
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InhqMnluU3Y3Lzl5UWwyRTBWYnVZMGJETVJLZmc5VGw1bithMDIrQ2pxTlk9IiwiaXYiOiJ5elUxUnlmayt4b2V2bHM4YUo1K2RRPT0iLCJpYXQiOjE2ODg0OTA3NDh9.q80c9TsBw9pK2TGJaMMwFUbWStJYlaYGW6gCkvd3ZlA",
        "id": 18,
        "username": "Ross",
        "password": "$2b$10$fZXjeZ2J6DtTdp3MWCIpguhf4D8/bBghhjnd8U5qDHqimAonQEj/i",
        "createdAt": "2023-07-04T17:09:52.278Z",
        "updatedAt": "2023-07-04T17:09:52.278Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InhqMnluU3Y3Lzl5UWwyRTBWYnVZMGJETVJLZmc5VGw1bithMDIrQ2pxTlk9IiwiaXYiOiJmU0pmbFRmdHNtV2dadEwySUFjUXF3PT0iLCJpYXQiOjE2ODg0OTA3NDh9.Ysk-dKCBQ8A-t02DlWLb6g4QICMiP0yhQx16Cp715E0"
    }
    ```

* Endpoint: /users (require Auth)

    * Returns Object
    ```Js
    [
    "Ross",
    "Monica",
    "Joey",
    "Rachel"
    ]
    ```
* Endpoint: /secret (require Auth)

    * Returns Object
    ```Js
    {
    "message": "Welcome to the secret area!"
    }
    ```

### Test:
* Unit Test: npm test

### WRRC
![](./images/WRRClab07.jpg)