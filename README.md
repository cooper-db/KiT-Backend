
# KiT -- Keep In Touch
KiT is a native-like mobile app that reminds users to keep in touch with the people they most want to stay connected with. Upon signing up, users can import contacts from their phone or add users manually, inputting phone, email, relationship type (family, social or professional), notes, and the frequency with which they would like to be reminded to contact that person. The user opens the app each day to see a randomly generated contact (based on the preferred frequency of contact), and can either use the displayed phone/email information to get in touch, or send the contact a text message right from the home screen.

KiT's backend API was engineered with Node/Express, utilizes KnexJS to make data requests to a PostgreSQL database, and is deployed on Heroku. The frontend was built with AngularJS and is wrapped with Ionic to enable native app functionality. User passwords are encrypted using Bcrypt, and user authentication is implemented using JWT web tokens.

KiT's [Tin-Can Phone Logo](https://creativecommons.org/licenses/by/3.0/us/) is credited to Meg Clingman, and is licensed under CC 3.0.

##Examine, Play, Contribute
Feel free to fork and clone both the backend and frontend repositories onto your local machine to see how KiT works or add additional features. Follow these instructions for local installation:

###Install NPM dependencies
```bash
npm install
```

###Create postgreSQL database named 'kit'
```bash
createdb kit
```

###Run knex migrations to insert users and contacts tables into postgreSQL database
```bash
knex migrate:latest
```


###Run knex seeds to insert records into users and contacts tables
```bash
knex seed:run
```

###Add .env file and insert JWT secret
```bash
touch .env
```

###Navigate to frontend repository and follow installation instructions:
[https://github.com/cooper-db/kit-frontend](https://github.com/cooper-db/kit-frontend)
