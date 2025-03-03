CREATE DATABASE db_cursos_app;

\c db_cursos_app;

CREATE TABLE usuarios (
  id        SERIAL        NOT NULL,
  email     VARCHAR(50)   NOT NULL  UNIQUE,
  password  VARCHAR(60)   NOT NULL,
  rol       VARCHAR(25)   NOT NULL,
  nombre    VARCHAR(50)   NOT NULL,
  apellido  VARCHAR(50)   NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cursos (
  id          SERIAL        NOT NULL,
  titulo      VARCHAR(50)   NOT NULL,
  descripcion TEXT,
  instructor  VARCHAR(100)  NOT NULL,
  fecha_ini   DATE          NOT NULL,
  fecha_fin   DATE          NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE categorias (
  id          SERIAL        NOT NULL,
  nombre      VARCHAR(50)   NOT NULL,
  descripcion TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE carro (
  id_usuario  INT           NOT NULL,
  id_curso    INT           NOT NULL,
  PRIMARY KEY (id_usuario, id_curso),
  FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
  FOREIGN KEY (id_curso) REFERENCES cursos (id)
);

CREATE TABLE compras (
  id          SERIAL        NOT NULL,
  id_usuario  INT           NOT NULL,
  id_curso    INT           NOT NULL,
  fecha       DATE          NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios (id),
  FOREIGN KEY (id_curso) REFERENCES cursos (id)
);