# Student Records Management API

This is a simple **backend RESTful API** for managing student records, built with **Express.js**, **MongoDB Atlas**, and **Mongoose**.  
It allows you to create, read, update, and delete (CRUD) student data easily.

---

## 📚 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Thunder Client / Postman (for testing)

---

## 📁 Project Structure

```
student-records-api/
├── controllers/
│   └── studentController.js
├── models/
│   └── Student.js
├── routes/
│   └── studentRoutes.js
├── dbConfig.js
├── server.js
├── .env
├── .gitignore
├── package.json
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/student-records-api.git
cd student-records-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root directory with the following:

```plaintext
PORT=5000
MONGODB_URI=your-mongodb-connection-uri/studentDB
```
Make sure `.env` is listed in `.gitignore` to keep it private.

### 4. Start the server

```bash
npm run dev
```

If everything is correct, you should see:

```
MongoDB connected successfully!
Server running on port 5000
```

---

## 🛠️ API Endpoints

| Method | Endpoint | Description |
|:---|:---|:---|
| GET | `/students` | Get all students |
| GET | `/students/:id` | Get a student by ID |
| POST | `/students` | Create a new student |
| PUT | `/students/:id` | Update an existing student |
| DELETE | `/students/:id` | Delete a student |

---

## 🧪 How to Test

Use **Thunder Client** (VS Code extension) or **Postman** to send requests:

- **GET /students** — retrieve all students
- **POST /students** — add a new student
- **GET /students/:id** — get one student
- **PUT /students/:id** — update a student
- **DELETE /students/:id** — remove a student

Make sure to send JSON data for POST and PUT requests.

Example body for POST:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "course": "Computer Science"
}
```

---

## 📸 Screenshots

- [x] GET /students
- [x] POST /students
- [x] GET /students/:id
- [x] PUT /students/:id
- [x] DELETE /students/:id

*(Screenshots available in the repository or project submission.)*

---

## 🔒 Important Notes

- `.env` is ignored from Git using `.gitignore`.
- Use a **MongoDB Atlas URI** with a database named `studentDB`.
- Always replace `<db_password>` and `<username>` properly in your connection string.

---

## ✨ Future Improvements (Optional Ideas)

- Add pagination for GET all students
- Add search/filter functionality
- Add user authentication (JWT)
- Host API online (Render, Vercel, etc.)

---

## 📌 Author

- Name: Chan Sok Sreng
- Project for Practice / School Assignment
