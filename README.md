# Peticiones a un servidor cuando no vamos a tener internet

Si por unas fiestas, por una reunión familiar súper interesante (guiño, guiño) o lo que sea, vamos a estar unos días sin internet pero no podemos vivir sin nuestras peticiones al servidor tenemos un truco muy callejero que nos salvará el día.

Vamos a suponer que queremos hacer un ejercicio que tira de la API de usarias de Github:

1. Cargamos en el navegador la url de nuestra petición: https://api.github.com/users/gootyfer

2. Una vez vemos en el navegador el resultado (que será un objeto JSON como un sol) damos a `guardar como` y guardaremos un archivo .json, yo lo he llamado **gootyfer.json**
3. Lo añadimos a nuestro proyecto bien cerquita del **index.html** (no usaremos el kit de gulp)
4. Ya podemos hacer los fetch directamente a ese archivo como si fuese a la url.

> Recordad que las imágenes no nos funcionarán ya que no tenemos internet pero podremos trabajar con el objeto sin problema.

## ¿Puedo ver un ejemplo de esto?

Claro, en este repositorio tienes un ejemplo para verlo funcionando ;)

***

![Interneeeee](assets/interneee.jpeg)
