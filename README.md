# Prueba técnica para Adecco

## Decisiones:

### Estructura
Para facilitar la creación de la estructura de la web, se utilizó principalmente Tailwind CSS. Esto permitió lograr un encolumnado adecuado para los usuarios y las imágenes de los álbumes, entre otras cosas.

### Redux
Para manejar el estado de la aplicación se optó por utilizar Redux. Se guardó la lista de usuarios, la lista de posts y de álbumes, un booleano indicando si el sidebar se encuentra abierto o no, y un selectedUser para indicar el usuario que se encuentra activo dentro del sidebar.

### React-Modal
Para la visualización de los posts y álbumes se decidió utilizar modal boxes con la finalidad de mejorar la experiencia de usuario.

### React form
Para la validación de los formularios se utilizó la librería React Hook Form en conjunto con Yup para asegurarse de que la información se encuentra completa en todos los casos.
