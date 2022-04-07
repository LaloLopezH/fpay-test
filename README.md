# FullStack - TEST - 🚀 


_A continuación se detallan las características funcionales y técnicas del Test para Fpay. Asimismo, encontrarán instrucciones que permitirán ejecutar la solución en local de forma sencilla._

## Funcionalidades 🖇️

*  Realizar un algoritmo que imprima los números primos entre 2 y un número dadom de forma descendente
*  Ejemplo 1: dado el número 7 se debería imprimir 7,5,3,2
*  Ejemplo 2: dado el número 15 se debería imprimir 13,11,7,5,3,2


## Expecificación técnica 🛠️

* El apirest (backend) ha sido desarrollado en Node Js
* El backend se encuentran en un contenedor docker

## Pre-requisitos 📋

_Se deberá tener instalado el software:_

* [Google Chrome](https://www.google.com/chrome/)
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/get-started)
* [Postman](https://www.postman.com/)

## Instalación 🔧

_1. Descargar el proyecto de GitHub_


```
git clone https://github.com/lalolopez/fpay-test
```

_2. Luego ingresar al repositorio donde se ha descargado el proyecto, abrirlo en un terminal (cmd) y ejecutar el siguiente comando:_

```
docker-compose up
```

_3. Para probar la aplicación, ingresar en postman la siguiente ruta:_

```
http://localhost:8000/api/proceso
```

**En la pestaña "Params" ingresar:**

```
KEY: numero 
VALUE: 13
```

**Si desea revisar la documentación puede ingresar a la siguiente ruta:**

```
http://localhost:8000/api/docs
```

_4. Luego de realizar las pruebas ejecutar el siguiente comando en el terminal (cmd):_

```
docker-compose down --rmi all
```


## Versionado 📌

Se uso [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles (https://github.com/lalolopez/fpay-test).

## Autor ✒️

**Eduardo López Hidalgo - Dev Full Stack Senior**

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Finalmente 🎁

El presente test se ha realizado con muy buena actitud y deseo de realizar un desarrollo de calidad deseando que se cubran las espectactivas del evaluador. 