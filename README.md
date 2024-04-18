# Agenda-de-Eventos
Se realizo una agenda de gestiónde eventos usando node.js, express, y html
Integrantes:
- Jose Alberto Rondón Torres
- Yoel Ccorihuaman Guillen
- Kevin Dietmar Gonzales Fernández
- Patrick Jefferson Gonzales Fernández

## Comandos Utilizados en Windows PowerShell <br>

  * docker run -it --name agenda -p 8080:3001 ubuntu <br>
    Este comando inicia un contenedor Ubuntu en modo interactivo, con el nombre agenda, y mapea el puerto 8080 del sistema anfitrión al puerto 3001 del contenedor.

  * apt-get update <br>
    Este comando actualiza la lista de paquetes disponibles desde los repositorios configurados. No instala ni actualiza paquetes, solo actualiza la información de los paquetes disponibles.

  * apt-get install nodejs <br>
    Este comando se utiliza para instalar el entorno de ejecución de Node.js en el sistema. Descarga e instala Node.js y sus dependencias desde los repositorios de paquetes apt configurados en el sistema.

  * apt-get install npm <br>
    Este comando se utiliza para instalar el gestor de paquetes npm (Node Package Manager) en el sistema. npm es una herramienta fundamental en el ecosistema de Node.js, permite la instalación y gestión de paquetes de Node.js y sus dependencias de manera sencilla y eficiente.

  * mkdir Agenda <br>
    Este comando crea un nuevo directorio con el nombre "Agenda" en el directorio actual.

  * cd Agenda <br>
    El comando "cd Agenda" se utiliza para cambiar el directorio de trabajo actual al directorio "Agenda". Después de ejecutar este comando, cualquier operación realizada desde la línea de comandos se llevará a cabo en el contexto del directorio "Agenda".

  * mkdir public <br>
   El comando "mkdir public" crea un nuevo directorio llamado "public" en el directorio actual.

  * touch agenda.js <br>
   El comando "touch agenda.js" crea un nuevo archivo llamado "agenda.js" en el directorio actual. Este comando es útil cuando se necesita crear rápidamente un nuevo archivo vacío para comenzar a escribir código en él.
  
  * cd public <br>
   El comando "cd public" se emplea para navegar al directorio llamado "public" en el sistema de archivos desde la línea de comandos. Esto permite acceder y trabajar con archivos y recursos que se encuentran dentro de ese directorio específico.

  * touch index.html <br>
   El comando "touch index.html" crea un nuevo archivo llamado "index.html" en el directorio actual. Esto es útil cuando se desea crear rápidamente un archivo HTML vacío para comenzar a desarrollar una página web.

  * cd .. <br>
   El comando "cd .." permite retroceder un nivel en la estructura de directorios desde la ubicación actual en la línea de comandos. Es útil para navegar de manera eficiente entre directorios cuando se está explorando el sistema de archivos.

  * npm install express <br> 
   Este comando se utiliza para instalar el paquete "express" utilizando npm (Node Package Manager). Esto descarga e instala el framework Express.js, que es una herramienta popular en Node.js para construir aplicaciones web y APIs.
    
  * node agenda.js <br>
   Este comando se utiliza para ejecutar un archivo JavaScript llamado "agenda.js" utilizando Node.js. Esto iniciará la ejecución del código JavaScript contenido en el archivo "agenda.js" en el entorno de Node.js

## Descargar imagen en Docker hub
Para poder descargar la imagen del proyecto, puede hacerlo desde el siguiente enlace:
> http://hub.docker.com/r/fireflame2/agenda

O directamente desde su docker con el comando:
`docker pull fireflame2/agenda1:0`
