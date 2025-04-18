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
git clone https://soksreng/your-username/student-records-api.git
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
      ![Screenshot 2025-04-17 230126](https://github.com/user-attachments/assets/224616f3-252f-4fae-9b05-311a96520c5f)

- [x] POST /students
      ![Screenshot 2025-04-17 230354](https://github.com/user-attachments/assets/68a5ea1e-caaf-4b0e-ad81-1fdf37310412)

- [x] GET /students/:id
      ![Screenshot 2025-04-17 230553](https://github.com/user-attachments/assets/7b960d96-f7fb-4f81-9ed3-6770f6e412e5)

- [x] PUT /students/:id
      ![Screenshot 2025-04-17 230627](https://github.com/user-attachments/assets/96a478d8-c29f-4b0f-a144-772abd3412b3)

- [x] DELETE /students/:id
      ![Screenshot 2025-04-17 230821](https://github.com/user-attachments/assets/71e17ee7-c2ed-4a58-a0bf-082b27000145)


---

## 🔒 Important Notes

- `.env` is ignored from Git using `.gitignore`.
- Use a **MongoDB Atlas URI** with a database named `studentDB`.
- Always replace `<db_password>` and `<username>` properly in your connection string.

---



## 📌 Author

- Name: Chan Sok Sreng
- Project for Practice
