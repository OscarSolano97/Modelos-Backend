Actividad 2

Responde brevemente:

• ¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?

En un backend con Node.js, Express y router, el componente que recibe la petición HTTP es el servidor de Express, y el router se encarga de dirigirla al controlador correspondiente.

• ¿Qué componente se encarga de comunicarse con la base de datos?

El modelo es el componente que se comunica con la base de datos, usando SQL y consultas para obtener o guardar información.

• ¿Qué componente envía finalmente la respuesta HTTP al cliente?

El controlador es el componente que recibe la lógica de la petición y envía la respuesta HTTP al cliente mediante res.json(), res.send() o res.status().json().