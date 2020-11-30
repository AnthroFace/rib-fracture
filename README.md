# rib-fracture
Django API and React App

Keep a database of patients, able to add new, edit existing, and remove patients.

## Run it locally

In order to run the projects locally, you need to have Node, npm and Python installed on your machine.

### Running the Django project (server)

Ensure Python installed  

Recommened to use virtual environment - doesnt have to be in project folder:

```bash
python3 -m venv env
```

```bash
source env/bin/activate
```

Djano dependencies:

```bash
pip install django djangorestframework django-cors-headers
```
`cd` django_react_proj directory
If you made changes to the model, you will have to migrate and maybe makemigrations:

```bash
python manage.py makemigrations
```

```bash
python manage.py migrate
```

Still in django_react_proj directory to run the project/server:

```bash
python manage.py runserver
```

http://localhost:8000/api/patients/ to check the API.

### Running the React project

`cd` the frontend directory

npm dependecies:

```bash
npm install react-router-dom --save
```

```bash
npm install @material-ui/core --save
```

Do this before running the first time and if you install something  
Also good to do everyone once and a while if something isn't working:

```bash
npm install
```

Run the app:

```bash
npm start
```
http://localhost:3000 for the app (should open automatically)

Saving while app is running should instantly reflect changes