# 🛒 Product Catalog Full-Stack Application

A dedicated Full-Stack implementation focusing on the **Product** and **Category** modules. This project serves as a practical guide to understanding the data flow between a **React** frontend and a **Spring Boot** backend using **MySQL** for persistence.

---

## 🏗️ System Architecture
The application follows a structured 3-tier architecture to handle the Product-Category relationship:



1. **Frontend (React):** Handles UI components for browsing and managing the catalog.
2. **Backend (Spring Boot):** Provides RESTful APIs and handles business logic.
3. **Database (MySQL):** Stores relational data with `update` schema management.

---

##   Features

* **Category Module:** Organize products into logical groups.
* **Smart Search:** Real-time product search by name or description.
* **Dynamic Sorting:** Toggle between **Price: Low to High** and **Price: High to Low**.
* **Category Filtering:** Filter the catalog based on specific category IDs.
* **Full-Stack CRUD:** Seamless Create, Read, Update, and Delete operations.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Axios |
| **Backend** | Java, Spring Boot, Spring Data JPA |
| **Database** | MySQL 8.0 |
| **Tools** | Maven, Postman |

---

## 📂 Project Structure

### Backend (`productcatalog`)
```text
src/main/java/com/shivam/productcatalog/
├── controller/     # REST Endpoints (@RestController)
├── entity/         # Database Models (@Entity: Product, Category)
├── repository/     # Data Access Layer (JpaRepository)
└── service/        # Business Logic Layer

Frontend
src/
├── components/     # UI Components
├── services/       # API calling logic (Axios)
└── App.js          # Core application logic

⚙️ Configuration & Setup
1. Database Setup
Open your MySQL terminal or Workbench.

Create the database: CREATE DATABASE productcatalog;

2. Backend Configuration
Update your src/main/resources/application.properties with your local credentials. Do not commit your password to version control.
spring.application.name=productcatalog
spring.datasource.url=jdbc:mysql://localhost:3306/productcatalog
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

Getting Started
Clone the repo:
git clone [https://github.com/sde-shivam/E-Commerce-Website.git](https://github.com/sde-shivam/E-Commerce-Website.git)

Setup Database:
Open MySQL Workbench and run: CREATE DATABASE productcatalog;

Run Backend:
Import the project into IntelliJ/Eclipse and run ProductcatalogApplication.java.

Run Frontend:
cd frontend
npm install
npm start
