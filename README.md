# Prueba técnica para Adecco

## Decisiones:

### Estructura
Se utilizó mayormente Tailwind para facilitar la creación de la estructura de la web, como por ejemplo el encolumnado de los usuarios, o de las imágenes de cada álbum.

### Redux
Se utiliza Redux para guardar la lista de usuarios, como también la lista de posts y de álbumes. Además, también se guarda un booleano indicando si el sidebar se encuentra abierto o no, y por último, se guarda un `selectedUser` para indicar el usuario que se encuentra activo dentro del sidebar.

### React-Modal
Se decidió mostrar tanto los posts como los álbumes en modal box ya que se consideró que era la mejor manera de mostrarlo teniendo en cuenta la experiencia de usuario.

### React form
Todos los formularios se encuentran validados con React Hook Form y Yup para corroborar que la información está completa en todos los casos.
