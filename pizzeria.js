/*
 * Script que se encarga de poblar la base de datos  
 * 
 */

print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("pizzeria_nivel_1");

/*Limpiamos la base de datos por si existia algo antes*/
db.dropDatabase();

/*coleciones de nuestro modelo de datos*/
db.createCollection("clientes");
db.createCollection("empleados");
db.createCollection("entregas_domicilio");
db.createCollection("localidades");
db.createCollection("pedidos");
db.createCollection("productos");
db.createCollection("provincias");
db.createCollection("tiendas");

print("creating clientes");
cliente1 = {
    "_id": {
        "$oid": "61c9fe7c5e3e487799c13441"
    },
    "id_cliente": 1,
    "nombre": "Xavi",
    "apellido": "Alonso",
    "direccion": {
        "calle": "independencia",
        "numero": 123,
        "piso": "bajos",
        "puerta": "1B",
        "codigoPostal": 8025
    },
    "id_localidad": 1
};

print("creating empleados");
empleado1 = {
    "_id": {
        "$oid": "61ca01e85e3e487799c1345b"
    },
    "id_empleado": 1,
    "nombre": "Raul",
    "apellido": "Gonzalez",
    "NIF": "A1234567B",
    "id_tienda": 1,
    "direccion": {
        "calle": "Les Corts",
        "numero": 123,
        "piso": "2",
        "puerta": "3",
        "codigoPostal": 8015
    },
    "puesto_de_trabajo": "repartidor"
};

print("creating entregas_domicilio");
entrega_domicilio1 ={
    "_id": {
        "$oid": "61ca0a5f5e3e487799c1346e"
    },
    "id_pedido": 1,
    "id_tienda": 1,
    "id_empleado": 1,
    "fecha_hora": {
        "$date": "2021-12-26T19:30:15.000Z"
    }
};

print("creating localidades");
localidad1 = {
    "_id": {
        "$oid": "61c9ff645e3e487799c13449"
    },
    "id_localidad": 1,
    "nombre": "barcelona",
    "id_provincia": 1
};

print("creating pedidos");
pedido1 = {
    "_id": {
        "$oid": "61cce48cd2a568640882ee79"
    },
    "id_pedido": 1,
    "id_cliente": 1,
    "fecha_hora": {
        "$date": "2021-12-28T23:00:00.000Z"
    },
    "tipo_entrega": "domicilio",
    "productos": [{
        "id_producto": 1
    }, {
        "id_producto": 1
    }, {
        "id_producto": 3
    }],
    "total": 21.5
};

print("creating productos");
producto1 = {
    "_id": {
        "$oid": "61ca058c5e3e487799c1345f"
    },
    "id_producto": 1,
    "nombre": "pizza margarita",
    "descripcion": "salsa de tomate, queso",
    "imagen": "url",
    "precio": 10
};

producto2 = {
    "_id": {
        "$oid": "61ca06865e3e487799c13462"
    },
    "id_producto": 2,
    "nombre": "hamburguesa tradicional",
    "descripcion": "carne de ternera, tomate, queso, lechuga, ketchup, mayonesa, mostaza",
    "imagen": "url",
    "precio": 8
};

producto3 = {
    "_id": {
        "$oid": "61ca073d5e3e487799c13464"
    },
    "id_producto": 3,
    "nombre": "coca cola",
    "descripcion": "refresco de cola",
    "imagen": "url",
    "precio": 1.5
};

print("creating provincias");
provincia1 = {
    "_id": {
        "$oid": "61c9ff1e5e3e487799c13445"
    },
    "id_provincia": 1,
    "nombre": "barcelona"
};

print("creating tiendas");
tienda1 = {
    "_id": {
        "$oid": "61ca006c5e3e487799c1344d"
    },
    "id_tienda": 1,
    "nombre": "pizzeria genial",
    "id_localidad": 1,
    "direccion": {
        "calle": "sicilia",
        "numero": 123,
        "codigoPostal": 8030
    }
};

print("***saving clintes***");
db.clientes.insert({cliente1});

print("***saving empleados***");
db.empleados.insert({empleado1});

print("***saving entregas_domicilio***");
db.entregas_domicilio.insert({entrega_domicilio1});

print("***saving localidades***");
db.localidades.insert({localidad1});

print("***saving pedidos***");
db.pedidos.insert({pedido1});

print("***saving productos***");
db.productos.insert({producto1});

print("***saving productos***");
db.productos.insert({producto2});

print("***saving productos***");
db.productos.insert({producto3});

print("***saving provincias***");
db.provincias.insert({provincia1});

print("***saving tiendas***");
db.tiendas.insert({tienda1});

print("SCRIPT FINISHED");

