/* Datos para la tabla usuarios */
INSERT INTO usuarios (email, password, rol, nombre, apellido) VALUES
('a@a.cl', 'aaa', 'admin', 'NombreA', 'ApellidoA'),
('b@b.cl', 'bbb', 'admin', 'NombreB', 'ApellidoB');

/* Datos para la tabla cursos */
INSERT INTO cursos (titulo, descripcion, instructor, fecha_ini, fecha_fin) VALUES
('Curso de SQL', 'Aprende SQL desde cero', 'Carlos Pérez', '2023-01-01', '2023-01-31'),
('Curso de Python', 'Introducción a la programación con Python', 'María López', '2023-02-01', '2023-02-28'),
('Curso de JavaScript', 'Domina JavaScript y sus frameworks', 'Juan García', '2023-03-01', '2023-03-31');

/* Datos para la tabla categorias */
INSERT INTO categorias (nombre, descripcion) VALUES
('Programación', 'Cursos relacionados con programación y desarrollo de software'),
('Bases de Datos', 'Cursos sobre diseño, administración y optimización de bases de datos'),
('Desarrollo Web', 'Cursos sobre tecnologías y herramientas para el desarrollo web');

/* Datos para la tabla carro */
INSERT INTO carro (id_usuario, id_curso) VALUES
(1, 1),
(2, 2),
(1, 3);

/* Datos para la tabla compras */
INSERT INTO compras (id_usuario, id_curso, fecha) VALUES
(1, 1, '2023-01-15'),
(2, 2, '2023-02-15'),
(1, 3, '2023-03-15');