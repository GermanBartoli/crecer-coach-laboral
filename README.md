# CRecer · Celeste Rivero

Landing de coaching laboral y desarrollo profesional. Identidad y contenidos de Celeste Rivero; repositorio administrado por German Bartoli.

## Sitio

Dirección prevista: `https://crecer-coach-laboral.pages.dev`. Publicación pendiente de autorización de Cloudflare; el conector actual dispone solo de lectura.

## Contenido

- Presentación, servicios, proceso de acompañamiento y trayectoria comprobada en el perfil de LinkedIn.
- Las 15 publicaciones de Instagram distribuidas en tres secciones: cinco ilustraciones, cuatro reflexiones y seis publicaciones restantes.
- Carruseles de imágenes con controles, flechas de teclado, gesto táctil y cierre con Escape.
- Diez textos de LinkedIn con lector interno y enlaces a la red.
- Dos escenas editoriales generadas para las secciones de claridad y conversación.
- WhatsApp, mapa de la zona centro de Córdoba y formulario exclusivamente visual, sin envío ni almacenamiento.

## Desarrollo

Sitio estático sin dependencias de ejecución. Requiere Node.js para preparar la distribución.

```sh
npm run check
npm test
npm run build
npm run dev
```

El servidor local utiliza `http://127.0.0.1:4317`.

## Estructura

| Archivo | Contenido |
| --- | --- |
| `index.html` | Secciones, metadatos, formulario y mapa |
| `styles.css` | Diseño adaptable, tipografía y estados |
| `script.js` | Publicaciones, lector, carruseles y menú |
| `content.json` | Textos, imágenes y enlaces de publicaciones |
| `assets/` | Imágenes locales y favicon |
| `scripts/build.js` | Copia explícita de archivos públicos a `dist/` |
| `wrangler.jsonc` | Configuración de Cloudflare Pages |

## Actualización de publicaciones

Editar `content.json` y agregar las imágenes a `assets/`. No hay sincronización automática ni uso de credenciales de redes sociales en la página. Los materiales de investigación quedan fuera de Git y de la distribución.

## Alcance del material

Captura editorial realizada el 24 de octubre de 2026. Se incluyen portadas y textos de los reels; los videos completos se ven en Instagram. Se recuperaron 2, 2, 3 y 3 imágenes de los cuatro carruseles de reflexiones. Los documentos multipágina de LinkedIn no se replicaron íntegramente. Para seis textos sin enlace individual recuperado, el botón dirige a la actividad de Celeste y lo indica expresamente. Las cuatro publicaciones destacadas conservan enlaces directos.

No se afirma haber importado la mayoría del archivo histórico completo de LinkedIn. Se incluyeron diez textos propios recuperados y tres imágenes asociadas. No se publicaron búsquedas laborales de terceros ni sus datos de contacto.

## Publicación

```sh
npx wrangler pages deploy dist --project-name crecer-coach-laboral --branch main
```

El dominio `crecer.dev` no estaba configurado en la cuenta de Cloudflare consultada. No se compró ni se registró ningún dominio. La dirección de publicación es la gratuita de Pages.

## Propiedad

© 2026 Celeste Rivero. Todos los derechos reservados. Las marcas de terceros conservan su titularidad. La atribución del sitio a Celeste no implica una transferencia de la cuenta de GitHub o Cloudflare.
