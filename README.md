• ¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?

El componente encargado de recibir la petición HTTP y dirigirla al controlador es el Router (enrutador).
Este se encarga de analizar la URL y el método HTTP (GET, POST, PUT, DELETE) y enviar la petición al controlador correspondiente.

• ¿Qué componente se encarga de comunicarse con la base de datos?

El componente encargado de comunicarse con la base de datos es el Modelo.
Su función es gestionar los datos de la aplicación, realizando operaciones como crear, consultar, actualizar o eliminar información.

• ¿Qué componente envía finalmente la respuesta HTTP al cliente?

El componente que envía la respuesta HTTP al cliente es el Controlador.
Este recibe la petición desde el router, procesa la información (con ayuda del modelo) y responde al cliente utilizando métodos como res.json() o res.status().json().



npm install para recrear el proyecto