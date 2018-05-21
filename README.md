# Prueba tecnica API-RESTFUL usuarios para Kuntur

## Dependencias
    * NodeJS 8
    * Postgrest 6 o superior

## Instalacion

### Base de datos

```
CREATE DATABASE prueba_tecnica
    WITH 
    OWNER = username
    TEMPLATE = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

CREATE TABLE public.usuarios
(
    id serial,
    name character varying COLLATE pg_catalog."default",
    last_name character varying COLLATE pg_catalog."default",
    address character varying COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default",
    state character varying COLLATE pg_catalog."default",
    country character varying COLLATE pg_catalog."default",
    phone character varying COLLATE pg_catalog."default",
    area_code character varying COLLATE pg_catalog."default",
    birthdate timestamp without time zone,
    CONSTRAINT usuarios_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.usuarios
    OWNER to username;
```

### NodeJS
    * npm install
    * npm start

## Endpoints

    * get       /test-conexion              prueba para verificar conexion con backend
    * get       /usuarios                   obtiene todos los usuarios
    * get       /usuarios/:usuario_id       obtiene un usuario por su id
    * post      /usuarios'                  crea un usuario y le genera un id
    * put       /usuarios/:usuario_id       modifica un usuario obtenido mediante id
    * delete    /usuarios/:usuario_id       elimina un usuario obtenido mediante su id