/*
 * Script que se encarga de poblar la base de datos  
 * 
 */

print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("optica_nivel_1");

/*Limpiamos la base de datos por si existia algo antes*/
db.dropDatabase();

/*coleciones de nuestro modelo de datos*/
db.createCollection("clientes");
db.createCollection("empleados");
db.createCollection("gafas");
db.createCollection("proveedores");
db.createCollection("ventas");

print("creating clientes");
cliente1 = {
    "_id": {
        "$oid": "61c4c9659b543f04eb2b4a2e"
    },
    "id_cliente": 1,
    "fecha_registro": {
        "$date": "2021-12-22T23:00:00.000Z"
    },
    "nombre": "xavi",
    "apellido": "lopez",
    "telefono": 234567891,
    "email": "xavilopez@email.com",
    "direccion": {
        "calle": "les corts",
        "numero": 123,
        "codigoPostal": 8030
    }
};


print("creating empleados");
empleado1 = {
    "_id": {
        "$oid": "61c4ca389b543f04eb2b4a32"
    },
    "id_empleado": 1,
    "nombre": "juan",
    "apellido": "perez"
};

print("creating gafas");
gafa1 = {
    "_id": {
        "$oid": "61c4c70c9b543f04eb2b4a2a"
    },
    "id_gafa": 1,
    "id_proveedor": 1,
    "marca": "rayban",
    "graduacion_izq": 1.5,
    "graduacion_dere": 1.5,
    "color_cristales": " ",
    "montura": "pasta",
    "color_montura": "negro",
    "precio": 150
};

print("creating proveedores");
proveedor1 = {
    "_id": {
        "$oid": "61c4c6079b543f04eb2b4a26"
    },
    "nombre": "super optica",
    "NIF": "E1234567",
    "telefono": 123456789,
    "fax": 987654321,
    "direccion": {
        "calle": "Independencia",
        "numero": 123,
        "piso": "bajos",
        "puerta": 0,
        "codigo-postal": 8025,
        "ciudad": "barcelona",
        "pais": "españa"
    },
    "id_proveedor": 1
};

print("creating ventas");
venta1 = {
    "_id": {
        "$oid": "61c4cc95deae24c115ce002c"
    },
    "id_venta": 1,
    "id_gafa": 1,
    "id_cliente": 1,
    "id_empleado": 1
};

print("***saving clientes***");
db.clientes.insert({cliente1});

print("***saving empleados***");
db.empleados.insert({empleado1});

print("***saving gafas***");
db.gafas.insert({gafa1});

print("***saving proveedores***");
db.proveedores.insert({proveedor1});

print("***saving ventas***");
db.ventas.insert({venta1});

print("SCRIPT FINISHED");

