# <img src="../../Docs/Img/logo.ico" alt="logo" width="25"/> Voxpress (Back End)

This project was generated with Springboot Maven Project.

## Development server (local)


Run `git clone https://github.com/pghb15/voxpress.git` to clone the general repository (front and back) in the desired location.


Run `cd ./Back/voxpress-back`.


Run `npm install` to install dependencies

## Description

Voxpress (Back End), is a microservice developed in Spring Boot 3.1.9. It is in charge of:

- Create, Read, Delete, Update Users
- Create, Read, Delete, Update Roles
- Create, Read, Delete, Update Voicemails

## Architecture

- **Domain**
This layer contains the Services and the Business Model, and anything related to it alone.
In the current archetypes, we only use the Anemic Model. If we want to use the Rich Model, this layer will contain the output ports, the repository, and Kafka events, not the Application layer.

- **Application**
This layer contains the communication ports with the Infrastructure layer. An input port is not necessary since it is redundant in Java to call an interface if it is not going to be used for anything else.
It also contains the services that will carry out the use cases, making use of the domain as deemed appropriate.
Data classes do not exist in this layer as they belong to the Domain.

- **Infrastructure**
This layer contains the external communication Services of our application. It is divided into the necessary packages to decouple each possible input and output. New ones can be created if necessary, but these have been predefined for these functionalities:

	- **ApiRest**
	Contains the Controllers, DTOs, Security, and classes necessary for communication via Rest API.
	- **IntegrationEvents**
	Contains the Consumers, Producers, and classes necessary for communication via Events.
	- **Repository**
	Contains the Repositories, DTOs, and classes necessary for data persistence.
      
## Endpoints

## Voicemails
- `GET /api/voicemails` to obtain all voicemails.
- `GET /api/voicemails/{contactId}` to obtain an specific voicemail.
- `GET /api/voicemails/assigned` to obtain all voicemails which attribute type is equal to assigned.
- `GET /api/voicemails/archived` to obtain all voicemails which attribute type is equal to assigned.
- `GET /api/voicemails/inbox` to obtain all voicemails which attribute type is equal to assigned.
- `POST /api/voicemails/` to create a voicemail
- `PUT /api/voicemails/{contactId}` to modify a voicemail
- `DELETE /api/voicemails/{contactId}` to delete a voicemail


## Users

- `GET /api/user` to obtain all users.
- `GET /api/user/{id}` to obtain an specific user.
`- POST /api/user/` to create a voicemail
- `PUT /api/user/{contactId}` to modify a voicemail
- `DELETE /api/use/{id}` to delete a voicemail

## Roles

- `GET /api/role` to obtain all roles.
- `GET /api/role/{id}` to obtain an specific role.
- `POST /api/role/` to create a voicemail
- `PUT /api/role/{id}` to modify a voicemail
- `DELETE /api/role/{id}` to delete a voicemail

## Contribute

Send an email to phernandez@itba.edu.ar
