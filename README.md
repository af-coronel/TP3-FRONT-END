# TP DE PRESENTACIÓN DEL GRUPO 12

## Descripción
En este trabajo se trata de plasmar las habilidades de cada integrante del equipo en cuanto a React, ayudándonos porque tenemos diferentes niveles de conocimientos. Se trata de una **presentación interactiva** del Grupo 12, donde cada integrante diseñó su propia tarjeta personal aplicando conocimientos de **React**.  
La idea fue trabajar en equipo, compartir estilos y experimentar con diferentes efectos visuales y funcionalidades, respetando la estética retro y creativa que nos caracteriza.
Lo importante es el uso de componentes reutilizables con y sin props, con la utilización de children, como el uso de useState, useCallback, useEffect,useRef y useMemo y a eso le sumamos el React Router.

## Mejoras
### Búsqueda/Filtrado en JSON Local (Ana)
- En la página Datos JSON (sobre libros) se implementaron 5 select(dropdown) para realizar filtros por título, autor, género, año de publicación e idioma. Se pueden unir diferentes filtros, por ejemplo: género con idioma. Si no hay coincidencias saldrá un h2 mostrando "No hay libros que se ajusten a los filtros".
![Imágen en el TP anterior](/src/assets/imgMejoras/imgMejora1/sin_filtros_puestos.PNG)
![Imágen con los filtros vacíos](/src/assets/imgMejoras/imgMejora1/filtros_vacios.PNG)
![Imágen con filtro de autor](/src/assets/imgMejoras/imgMejora1/filtro_autor.PNG)
![Imágen con filtro de autor y año](/src/assets/imgMejoras/imgMejora1/filtro_autor_anio.PNG)
![Imágen con filtros pero sin resultados](/src/assets/imgMejoras/imgMejora1/filtro_sin_datos.PNG)

### ## Mejora: Barras de Progreso de Habilidades (Jessica)

**Descripción:**  
<<<<<<< HEAD
Se implementaron barras de progreso animadas para mostrar visualmente el nivel de habilidades. Cada barra refleja el porcentaje de dominio de la habilidad correspondiente (HTML, CSS, JavaScript, Trabajo en equipo, Diseño UI).  
=======
- Se implementaron barras de progreso animadas para mostrar visualmente el nivel de habilidades de Jessica. Cada barra refleja el porcentaje de dominio de la habilidad correspondiente (HTML, CSS, JavaScript, Trabajo en equipo, Diseño UI).  
>>>>>>> 4a86438a63ab05f1cb606a059abefe7326baf2ed

**Antes:**  
![Antes](src/assets/imgMejorasJessica/antes.png)  
*(Aquí se veían solo los nombres y porcentajes sin animación ni barra visual)*

**Después:**  
![Después](src/assets/imgMejorasJessica/despues.png)  
*(Ahora se muestran barras animadas con la paleta de colores del sitio)*

<<<<<<< HEAD

### Mejora: Botones de redes sociales en el Sidebar (Virginia)

**Descripción:**  
Se agregaron botones de redes sociales **ciculares** al pie del sidebar azul, con **animación al hover**:
- Hover: leve *lift* (+translateY) y *scale*; cambio de fondo a un **degradado** con los colores del ícono del sitio. 
- Implementación: SVGs inline (sin dependencias), bloque pegado abajo con `margin-top: auto` dentro del sidebar (que usa `display: flex; flex-direction: column;`).

**Antes:**  
![Antes - Virginia](public/img/imgAntesVirginia.png)

**Después:**  
![Después - Virginia](public/img/imgDespVirginia.png)

=======
### Animaciones (Tomás)
- Mejora 3 (Animaciones): Se implementaron transiciones (`transition`) y animaciones (`@keyframes`) con CSS puro para efectos hover y carga de elementos (tarjetas, botones, páginas).
>>>>>>> 4a86438a63ab05f1cb606a059abefe7326baf2ed
### Título de la mejora 4
- Descripción de la mejora(también agregarlo en bitácora)
- Poner img antes y después de la mejora
### Título de la mejora 5
- Descripción de la mejora(también agregarlo en bitácora)
- Poner img antes y después de la mejora

## 🛠️ Tecnologías utilizadas
- **React**
- **Google Fonts**

## 🚀 Instalación y uso
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/af-coronel/TP3-FRONT-END.git
2. Ver si está instalado node   node -v
3. Poner este comando  npm install  para instalar todas las dependencias
4. Poner este comando npm run dev  para correr el proyecto en modo desarrollador, creando un servidor local.

## Enlace del sitio
[ENLACE VERCEL]()