# Bookmyshow
Bookmyshow is a ticketing platform where you can book tickets for a movie show.


## Author
- [@arun](https://github.com/mrarunsingh8)

## How to run

Clone the project

```bash
  git clone https://github.com/mrarunsingh8/book-my-show
```

Go to the project directory

```bash
  cd book-my-show
```

Install dependencies

```bash
  npm install
```

Start the server for development mode

```bash
  npm run dev
```

It will start a server for development use with url http://localhost:3000/.

Start the server production mode

```bash
  npm run start
```
It will start a server for production use.

## API Reference

##### Register a user

```http
   POST /auth/register
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name |
| `email`      | `string` | **Required**. email |
| `password`      | `string` | **Required**. password |

##### Login a user
```http
   POST /auth/login
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. email |
| `password`      | `string` | **Required**. password |

##### Get Everything City

```http
  GET /cities
```

##### Get City by cityId

```http
  GET /cities/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. cityId |


##### Get Movies by cityId
```http
  GET /cities/:cityId/movies
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |



##### Get theatres by cityId,movieId & date

```http
  GET /cities/:cityId/movies/:movieId/date/:date/theatres
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `movieId`      | `string` |  **Required**. movieId |
| `date`      | `string` |  **Required**. date |



##### Get theatres sheets by cityId,movieId, theatreId & showId

```http
  GET /cities/:cityId/movies/:movieId/theatre/:theatreId/shows/:showId/sheets/
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `movieId`      | `string` |  **Required**. movieId |
| `theatreId`      | `string` |  **Required**. theatreId |
| `showId`      | `string` |  **Required**. showId |


##### Create City 

```http
  POST /cities
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. cityName |


##### Update City 

```http
  PUT /cities/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. cityId |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. cityName |


##### Delete a City 

```http
  DELETE /cities/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. cityId |


#### Movies

##### Get Everything Movies

```http
  GET /movies
```

##### Get Movie by id

```http
  GET /movies/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. movieId |


##### Get Movie reviews by movieId

```http
  GET /movies/{:movieId}/reviews
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movieId`      | `string` |  **Required**. movieId |

##### Create a Movie 

```http
  POST /movies
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. Name of the movie |
| `description`      | `string` |  **Required**. Description for the movie. |
| `languages`      | `string` |  **Required**. movie in languages like English, Hindi |
| `categories`      | `string` |  **Required**. movie categories like Biography, Drama, Historical |


##### Create Movie reviews

```http
  POST /movies/{:movieId}/reviews
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movieId`      | `string` |  **Required**. movieId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `number` |  **Required**. userId |
| `comment`      | `string` |  **Required**. comment |
| `rating`      | `number<min: 0, max: 10>` |  **Required**. ratings |



##### Create reaction on Movies review

```http
  POST /movies/{:movieId}/reviews/{reviewId}/reaction
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `movieId`      | `string` |  **Required**. movieId |
| `reviewId`      | `string` |  **Required**. reviewId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `reaction`      | `ENUM<like|dislike>` |  **Required**. reaction |

##### Update Movie 

```http
  PUT /movies/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. movieId |

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. Name of the movie |
| `description`      | `string` |  **Required**. Description for the movie. |
| `languages`      | `string` |  **Required**. movie in languages like English, Hindi |
| `categories`      | `string` |  **Required**. movie categories like Biography, Drama, Historical |


##### Delete a Movie 

```http
  DELETE /movies/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` |  **Required**. movieId |



#### Theatres by cityId

##### Get Everything about Theatres by cityId

```http
  GET cities/:cityId/theatres
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |

##### Get Theatres by id

```http
  GET cities/:cityId/theatres/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `id`      | `string` |  **Required**. theatreId |


##### Create a Theatres 

```http
  POST cities/:cityId/theatres
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. Name of the theatre |
| `address`      | `string` |  **Required**. address for the theatre. |


##### Update Theatres 

```http
  PUT cities/:cityId/theatres/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `id`      | `string` |  **Required**. theatreId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. Name of the theatre |
| `address`      | `string` |  **Required**. address for the theatre. |


##### Update Theatres name

```http
  PATCH cities/:cityId/theatres/:id/name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `id`      | `string` |  **Required**. theatreId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` |  **Required**. Name of the theatre |


##### Update Theatres address

```http
  PATCH cities/:cityId/theatres/:id/address
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `id`      | `string` |  **Required**. theatreId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `address`      | `string` |  **Required**. address for the theatre. |


##### Delete a Theatres 

```http
  DELETE /cities/:cityId/theatres/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `id`      | `string` |  **Required**. theatreId |


### Bookings

##### Get all the bookings

```http
  GET /bookings
```


##### Get booking by bookingID

```http
  GET /bookings
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookingID`      | `string` |  **Required**. bookingID |

##### Create a booking

```http
  POST /bookings
```
| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cityId`      | `string` |  **Required**. cityId |
| `theatreId`      | `string` |  **Required**. theatreId |
| `movieId`      | `string` |  **Required**. movieId |
| `showId`      | `string` |  **Required**. showId |
| `date`      | `string` |  **Required**. date |
| `timing`      | `string` |  **Required**. timing |
| `sheets`      | `array<Object{screenId: string, row: string, sheetNumber: number}>` |  **Required**. sheets |



##### Update the booking payment status

```http
  POST /bookings/:bookingId/paymentStatus
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `bookingId`      | `string` |  **Required**. bookingId |


| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `paymentStatus`      | `string` |  **Required**. paymentStatus |






