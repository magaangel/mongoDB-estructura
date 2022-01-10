/*
 * Script que se encarga de poblar la base de datos  
 * 
 */

print("STARTING SCRIPT");
//Host donde está nuestra base de datos, no tiene que ser nuestro equipo local, puede ser cualquier mongoDb.
conn = new Mongo("localhost");
//Nombre de la base de datos que vamos a utilizar
db = conn.getDB("youtube_nivel_2");

/*Limpiamos la base de datos por si existia algo antes*/
db.dropDatabase();

/*coleciones de nuestro modelo de datos*/
db.createCollection("canales");
db.createCollection("playlists");
db.createCollection("publicaciones");
db.createCollection("usuarios");
db.createCollection("videos");

print("creating canales");
canal1 = {
    "_id": 3,
    "id_canal": 1,
    "nombre": "mi canal",
    "descripcion": "mi primer canal",
    "fecha_hora": {
        "$date": "2021-12-28T23:00:00.000Z"
    },
    "suscriptores": [{
        "id_usuario": 1
    }],
    "publicaciones": [{
        "id_publicacion": 1
    }],
    "likes": 1,
    "dislikes": 1,
    "autor_idUs": 1
};

print("creating playlists");
playlist1 = {
    "_id": 4,
    "id_playlist": 1,
    "nombre": "mi primera playlist",
    "autor_idUs": 1,
    "videos": [{
        "id_video": 1
    }],
    "estado": "publica",
    "fecha_hora": {
        "$date": "2021-12-28T23:00:00.000Z"
    }
};

print("creating publicaciones");
publicacion1 = {
    "_id": 2,
    "id_publicacion": 1,
    "id_usuario": 1,
    "id_video": 1,
    "etiquetas": ["mivideo", "amolosvideos"],
    "estado": "privado",
    "fecha_hora": {
        "$date": "2021-12-28T23:00:00.000Z"
    },
    "likes": 1,
    "dislikes": 1,
    "comentarios": [{
        "id_usuario": 1,
        "msg": "mi primer comentario",
        "fecha_hora": {
            "$date": "2021-12-28T23:00:00.000Z"
        },
        "likes": 1,
        "dislikes": 1
    }]
};

print("creating usuarios");
usuario1 = {
    "_id": 0,
    "id_usuario": 1,
    "email": "usuario@gmail.com",
    "password": "contraseña",
    "nombre": "usuario youtube",
    "fecha_nacimiento": "1990-12-20",
    "sexo": "masculino",
    "direccion": {
        "pais": "España",
        "codigo_postal": 8020
    }
};

print("creating videos");
video1 = {
    "_id": 1,
    "id_video": 1,
    "titulo": "mi video",
    "descripcion": "un divertido video",
    "tamaño": 1.12,
    "archivo": "url",
    "duracion": 1200,
    "thumbnail": "url",
    "estado": "publico",
    "reproducciones": 1,
    "likes": 1,
    "dislikes": 1
};

print("***saving canales***");
db.canales.insert({canal1});

print("***saving playlists***");
db.playlists.insert({playlist1});

print("***saving publicaciones***");
db.publicaciones.insert({publicacion1});

print("***saving usuarios***");
db.usuarios.insert({usuario1});

print("***saving videos***");
db.videos.insert({video1});

print("SCRIPT FINISHED");

