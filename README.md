
# Henry backend Technical Test

Para el desarrollo de esta te servicio, use la clean arquitecture que permite que nuestro codigo se estructure en capas, y delegando a cada capa una responsabilidad.

## Tecnologias

El proyecto esta construido con react, y para los estilos use styled components

## Como correr el proyecto?

1. En el archivo env.js que se encuentra en la raiz del proyecto, debemos colocar la direccion base de nuestro servicio backend
2. Ejecutar el siguiente comando para instalar dependencias

npm install

3. Luego de esos procederemos a ejecutar el siguiente comando, que se encargara de poner a ejeecutar el proyecto

npm run dev

4. Al finalizar ese proceso, si es primera vez que lo ejecutamos no tendremos ningun tipo de informacion, en el proyecto estara una collection de postman con el fin de probar, que nos permitira crear cursos, crear lecciones y probar el listado de esta informacion

## Orden de creacion de recursos

1. Se crea un curso|
2. Para la creacion de una leccion es necesario tener el id de un curso
3. Vemos los resultado

![image](https://user-images.githubusercontent.com/62846163/206929691-800374f6-64c2-44ee-a541-a32446787c54.png)
