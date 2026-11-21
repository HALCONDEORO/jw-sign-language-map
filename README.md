# Mapa documental de lenguas de signos

Actualización de zonas, 21 noviembre 2026. Repositorio de acceso abierto y web en GitHub Pages. Sin pagos. No afiliado a jw.org.

## Abrir

Descarga index.html y ábrelo en un navegador actual. Es autocontenido, sin conexión ni instalación. El mapa tiene zoom, fichas por país, búsqueda y dos capas separadas: noticias con fecha y muestras del localizador. Los enlaces de fuentes se abren solo cuando pulsas en ellos. No se usan rastreadores, teselas externas ni llamadas de red automáticas.

## Cobertura del corte

- 22 países con cifra nacional publicada, con fechas distintas entre 2022 y 2026. No es un total mundial actual.
- Fase inicial: 101 consultas mundiales por lengua; 25 devolvieron 25 lugares.
- Ampliación: 80 consultas geográficas adicionales; 92 sectores pendientes; 0 sectores al límite de resolución.
- Cada una de las 25 lenguas limitadas empieza por cuatro sectores del mundo. Si un sector devuelve 25 lugares, se divide en cuatro. Una consulta cada 25 segundos, sin sesión, sin paralelismo ni reintentos para superar bloqueos.
- Los identificadores se deduplican entre consultas antes de contar. Las cifras se acumulan como observaciones, nunca como crecimiento ni como un censo nacional.
- Menos de 25 resultados o agotar el plan de sectores no demuestra exhaustividad. Sin dato nunca significa cero. Un cero observado tampoco prueba ausencia.
- La clasificación nacional usa polígonos simplificados de Natural Earth. Islas pequeñas, costas y casos sin asignación clara quedan sin clasificar.

La propia app muestra el progreso y las limitaciones en cobertura geográfica. evidence.json conserva tablas, registro de fuentes y cobertura completa. noticias.csv, localizador.csv y cobertura-zonas.csv permiten trabajar con las tablas sin instalar nada. Los campos vacíos son sin dato, no cero.

## Fuentes editables

El ZIP de esta versión incluye plantillas HTML/JS, CSS, datos agregados y cartográficos, bibliotecas y build_standalone.py. Para reconstruir después de editar: python build_standalone.py. Python 3 sin paquetes adicionales. La app ya terminada se abre sin Python.

Si descargas source_archive.py del repo, ese archivo contiene el mismo código editable en un ZIP codificado: verifica su SHA-256, lo extrae en source/ y reconstruye la app localmente. No usa red. Esta versión limpia no incluye PDF ni historial de la entrega privada anterior.

## Privacidad y licencias

Solo agregados por país y lengua. No se incluyen nombres de personas o congregaciones, teléfonos, direcciones, horarios, coordenadas de reuniones ni identificadores individuales. Los enlaces de las consultas contienen únicamente idioma, centro de búsqueda y límites de los sectores, no ubicaciones de reuniones.

Leaflet 1.9.4 (BSD-2-Clause), world-atlas 2.0.2 (ISC) y Natural Earth, con licencias completas incluidas. No se copian fotos, logotipos, vídeos ni artículos íntegros de jw.org. Código propio sin licencia de redistribución concedida por ahora.

La web y el código se comparten con acceso abierto por decisión del propietario. No se incluyen datos de contactos ni ubicaciones individuales.
