Actividad 2

Responde brevemente:

• ¿Qué componente se encarga de recibir la petición HTTP y dirigirla al controlador?

En Node.js, el componente encargado de recibir la petición HTTP y dirigirla al controlador es el enrutador (o router).
El Enrutador: Analiza la URL y el método de la petición (GET, POST, etc.) y la delega a la función o controlador específico encargado de procesarla y generar la respuesta.

• ¿Qué componente se encarga de comunicarse con la base de datos?

El modelo es el componente que se comunica con la base de datos, usando SQL y consultas para obtener o guardar información.

• ¿Qué componente envía finalmente la respuesta HTTP al cliente?

El controlador es el componente que recibe la lógica de la petición y envía la respuesta HTTP al cliente mediante res.json(), res.send() o res.status().json().