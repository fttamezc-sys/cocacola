# Coca-Cola México — Landing page

Recreación de `index.html` (raíz del repositorio) como proyecto independiente en HTML, CSS y JavaScript puro, sin frameworks ni librerías.

```
mi-negocio/
├── index.html      HTML semántico (header, nav, main, section, article, figure, footer)
├── css/styles.css  CSS mobile-first con Flexbox y Grid
├── js/main.js      Año automático en el pie de página y menú móvil
└── img/            Imágenes extraídas del original (antes estaban incrustadas en base64)
```

Para verla, abre `index.html` en el navegador; no necesita servidor ni proceso de compilación.

## Diferencias con el original

- En escritorio (≥ 1184 px) se ve idéntica al original, píxel por píxel.
- En pantallas menores de 768 px, el menú se convierte en un botón de hamburguesa (el original se desbordaba horizontalmente en móvil) y el botón “Contáctanos” del header se oculta; el botón de WhatsApp sigue en el hero.
- En móvil las imágenes conservan sus proporciones (4:3 y 1:1) y el texto del hero tiene margen lateral.
