# 🛒 E-commerce-App

A simple Django REST Framework + ReactJS E-commerce Application with:

✅ User Registration / Login (JWT Auth)  
✅ Product listing, detail, add, update, delete (Admin & Creator only)  
✅ Cart functionality (add/update/remove)  
✅ Place orders  
✅ Order history (customer-specific)  
✅ Admin Product & Order Management  
✅ Docker support (Backend + Frontend)  
✅ SQLite for development  
✅ API testing with Postman Collection

---

## 📂 Project Structure in Tree Format

* [ecommerce_backend](./ecommerce_backend)
  * [manage.py](./ecommerce_backend/manage.py)
  * [db.sqlite3](./ecommerce_backend/db.sqlite3)
  * [Dockerfile](./ecommerce_backend/Dockerfile)
  * [ecommerce_backend (settings)](./ecommerce_backend/ecommerce_backend)
    * [__init__.py](./ecommerce_backend/ecommerce_backend/__init__.py)
    * [settings.py](./ecommerce_backend/ecommerce_backend/settings.py)
    * [urls.py](./ecommerce_backend/ecommerce_backend/urls.py)
    * [wsgi.py](./ecommerce_backend/ecommerce_backend/wsgi.py)
  * [products](./ecommerce_backend/products)
    * [models.py](./ecommerce_backend/products/models.py)
    * [serializers.py](./ecommerce_backend/products/serializers.py)
    * [views.py](./ecommerce_backend/products/views.py)
    * [urls.py](./ecommerce_backend/products/urls.py)
  * [users](./ecommerce_backend/users)
    * [serializers.py](./ecommerce_backend/users/serializers.py)
    * [views.py](./ecommerce_backend/users/views.py)
    * [urls.py](./ecommerce_backend/users/urls.py)
  * [orders](./ecommerce_backend/orders)
    * [models.py](./ecommerce_backend/orders/models.py)
    * [serializers.py](./ecommerce_backend/orders/serializers.py)
    * [views.py](./ecommerce_backend/orders/views.py)
    * [urls.py](./ecommerce_backend/orders/urls.py)
* [ecommerce-frontend](./ecommerce-frontend)
  * [Dockerfile](./ecommerce-frontend/Dockerfile)
  * [package.json](./ecommerce-frontend/package.json)
  * [public](./ecommerce-frontend/public)
    * [index.html](./ecommerce-frontend/public/index.html)
  * [src](./ecommerce-frontend/src)
    * [components](./ecommerce-frontend/src/components)
    * [context](./ecommerce-frontend/src/context)
    * [pages](./ecommerce-frontend/src/pages)
    * [App.js](./ecommerce-frontend/src/App.js)
    * [index.js](./ecommerce-frontend/src/index.js)
* [docker-compose.yml](./docker-compose.yml)
* [requirements.txt](./requirements.txt)
* [.gitignore](./.gitignore)
* [README.md](./README.md)
* [postman_collection.json](./postman_collection.json)

---

## 🚀 Features

🔐 JWT Authentication  
🛍️ Product CRUD (Admin & Product Owner)  
🛒 Add to Cart, Update Cart, Remove from Cart  
📦 Place Order, View Order History  
👑 Admin Product & Order Management  
🐳 Dockerized Setup (Backend + Frontend)  
🔄 API Testing with Postman Collection  
💾 SQLite Development Database

---

## ✅ Full Manual Project Setup

### 1️⃣ Clone the Repository

Open CMD in any desired folder (e.g., Desktop):


git clone https://github.com/aman2k02/ecommerce-app-v2.git


cd ecommerce-app-v2

2️⃣ Backend Setup (Django)

🔹 a) Go to Backend:


cd ecommerce_backend

✅ Note: Folder name is ecommerce_backend (not just backend).

🔹 b) Create & Activate Virtual Environment:

Windows CMD:


python -m venv env

env\Scripts\activate


Linux/Mac:

python3 -m venv env

source env/bin/activate

🔹 c) Install Python Dependencies:


pip install -r requirements.txt

❗ Possible Error:


ERROR: Could not open requirements file: [Errno 2] No such file or directory: 'requirements.txt'

✔️ Fix: You are not in ecommerce_backend — run:


cd ecommerce_backend

🔹 d) Run Migrations:


python manage.py migrate

✅ This creates the necessary database tables.

🔹 e) Run Django Server:


python manage.py runserver

✅ Backend runs at http://localhost:8000/

3️⃣ Frontend Setup (React)

🔹 a) Open a new terminal window (do not stop backend).

🔹 b) Go to frontend:


cd ecommerce-frontend

🔹 c) Install Node packages:


npm install

❗ Possible Error:


npm ERR! missing script: start

✔️ Fix: Make sure you are inside the correct ecommerce-frontend folder.

🔹 d) Start React App:


npm start

✅ React runs at http://localhost:3000/

✅ 4) Verify URLs

Service	URL

Backend (API)	http://localhost:8000/


Frontend (React)	http://localhost:3000/

Django Admin	http://localhost:8000/admin/

For admin access use:

Username: aman

Password: aman1234

if you are getting error while admin because of database not sync by any reason then 

docker-compose up -d     be in main url 

Create a superuser inside Docker:

docker-compose exec backend python manage.py createsuperuser

🐳 Docker Setup

Make sure Docker is installed and running:

👉 Install Docker

✅ Clone the Repository:

git clone https://github.com/aman2k02/ecommerce-app-v2.git

cd ecommerce-app-v2

✅ Build & Run with Docker: Check again docker is showing running in left 

docker-compose up --build

if you are getting error after this like 
{
return self.cursor.execute(sql, params)
backend-1   |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
backend-1   |   File "/usr/local/lib/python3.12/site-packages/django/db/backends/sqlite3/base.py", line 360, in execute
backend-1   |     return super().execute(query, params)
}
then 

What you should do next:

From your project root (where docker-compose.yml is), run:

Then check again with:

docker ps

You should now see your backend container listed, something like:


CONTAINER ID   IMAGE                      COMMAND                  ...   NAMES
abc12345def6   yourproject_backend        "gunicorn ecommerce..."  ...   yourproject_backend_1

Now you can safely run migrations:

docker-compose exec backend python manage.py makemigrations

docker-compose exec backend python manage.py migrate

docker-compose up -d


Access the app:

Frontend: http://localhost:3000

Backend API: http://localhost:8000

📬 API Testing

Import the provided postman_collection.json into Postman to test all endpoints easily.

📝 Notes

Default database: SQLite (for local development).

Docker exposes:

Backend: 8000

Frontend: 3000

React communicates with the backend via http://localhost:8000

🙏 Credits
Built by Aman Verma — Full Stack Developer

📃 License
MIT License — free to use.
