APIS Y METODOS:

CategoriesServices GET
url: (http://127.0.0.1:8000/api/v1/service/categories/)

Services GET
url:(http://127.0.0.1:8000/api/v1/service/services/)

Services POST,PUT,DELETE
url:(http://127.0.0.1:8000/api/service/services/1) # id=category

    Estruct de POST:
        {
            "name":"Puertas",
            "img":"urls.https"
        }

Employees GET
url:(http://127.0.0.1:8000/api/v1/employee/employees/)

Employees POST
url:(http://127.0.0.1:8000/api/employee/employees/1/1/1) #1er id=gender, 2do id=document, 3er id=position

    **Estruct de POST:**
        {
            "name":"marta",
            "last_name":"lora",
            "date_birth":"2015-08-22",
            "cell":965874589,
            "img":"https://www.facebook.com/modaimg/photos/a.1174960625882572/2398135490231740/?__tn__=%3C"
        }

Employees DELETE
url:(http://127.0.0.1:8000/api/employee/employees/1) #id=id_user

ADMIN USER
*Email:admin@solidoct.com
*Password:yef12345
