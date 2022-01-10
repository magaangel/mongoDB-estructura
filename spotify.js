/*
 * Script que se encarga de poblar la base de datos  
 * 
 */

print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("spotify_nivel_3");

/*Limpiamos la base de datos por si existia algo antes*/
db.dropDatabase();

/*coleciones de nuestro modelo de datos*/
db.createCollection("albums");
db.createCollection("artistas");
db.createCollection("canciones");
db.createCollection("pagos_premium");
db.createCollection("playlists");
db.createCollection("usuarios");

print("creating albums");
album1 = {
    "_id": 4,
    "id_album": 1,
    "titulo": "Songs about Jane",
    "id_artista": 1,
    "fecha_pubicacion": "2002",
    "canciones": [{
        "id_cancion": 1
    }, {
        "id_cancion": 2
    }]
};

print("creating artistas");
artista1 = {
    "_id": 3,
    "id_artista": 1,
    "nombre": "Maroon 5",
    "thumbnail": "url"
};

print("creating canciones");
cancion1 = {
    "_id": 2,
    "id_cancion": 1,
    "nombre": "this love",
    "id_artista": 1,
    "duracion": "00:3:00",
    "reproducciones": "100"
};

print("creating pagos_premium");
pago1 = {
    "_id": 1,
    "id_usuario": 1,
    "num_recibo": 1,
    "precio": 9.99,
    "fecha_pago": "2020-10-15"
};

print("creating playlists");
playlist1 = {
    "_id": 5,
    "id_playlist": 1,
    "titulo": "mi playlist",
    "autor": 1,
    "fecha_cracion": "2020-12-25",
    "estado": [{
        "estado": "activa"
    }, {
        "estado": "eliminada",
        "fecha_eliminar": "2021-01-15"
    }],
    "canciones": [{
        "id_cancion": 1,
        "fecha_agregar": "2020-12-29",
        "id_usuario": 2
    }, {
        "id_cancion": 2,
        "fecha_agregar": "2020-12-29",
        "id_usuario": 3
    }],
    "compartida_con": [{
        "id_usuario": 2
    }, {
        "id_usuario": 3
    }]
};

print("creating usuarios");
usuario1 = {
    "_id": 0,
    "id_usuario": 1,
    "tipo_usuario": [{
        "tipo": "premium",
        "fecha_alta": "2020-10-15",
        "fecha_renovacion": "",
        "forma_pago": [{
            "forma_de_pago": "tarjeta",
            "num_tarjeta": 123456789,
            "mes_caducidad": 7,
            "ano_caducidad": 2023
        }, {
            "forma_de_pago": "paypal",
            "username_paypal": "usuario_paypal"
        }]
    }],
    "email": "usuario@email.com",
    "password": "mi_contraseña",
    "nombre": "xavi",
    "apellido": "alonso",
    "fecha_nacimiento": "1990-12-12",
    "sexo": "masculino",
    "pais": "España",
    "codigo_postal": 8027
};

print("***saving albums***");
db.albums.insert({album1});

print("***saving artistas***");
db.artistas.insert({artista1});

print("***saving canciones***");
db.canciones.insert({cancion1});

print("***saving pagos_premium***");
db.pagos_premium.insert({pago1});

print("***saving playlists***");
db.playlists.insert({playlist1});

print("***saving publicaciones***");
db.publicaciones.insert({publicacion1});

print("SCRIPT FINISHED");

