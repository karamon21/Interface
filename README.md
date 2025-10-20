# Interface - Teclado Interactivo Español

Una interfaz de teclado interactiva completa con soporte para caracteres especiales del español y generación automática de prompts.

## Características

### ✨ Funcionalidades Principales

1. **Listas de Entrada y Salida**
   - Lista de entrada: Muestra todos los mensajes enviados por el usuario
   - Lista de salida: Muestra las respuestas generadas automáticamente

2. **Pantalla Interactiva**
   - Pantalla táctil que responde a la interacción del usuario
   - Visualización en tiempo real del texto siendo escrito
   - Efectos visuales al interactuar

3. **Botones Especiales**
   - Botón "Enviar": Envía el texto actual y genera respuestas
   - Botones de puntuación española: ¿, ?, ¡, !
   - Botón de retroceso (⌫) para borrar caracteres
   - Botón "Limpiar" para borrar todo el texto

4. **Soporte Completo de Caracteres Especiales**
   - Letra ñ
   - Vocales acentuadas: á, é, í, ó, ú
   - Diéresis: ü
   - Signos de interrogación y exclamación españoles: ¿, ¡

5. **Sistema de Generación de Prompts**
   - Analiza el texto ingresado
   - Genera prompts contextuales basados en:
     - Palabras clave
     - Caracteres especiales utilizados
     - Signos de puntuación
     - Longitud del texto
   - Muestra múltiples sugerencias de prompts

## 🚀 Uso

### Instalación

1. Clone el repositorio:
```bash
git clone https://github.com/karamon21/Interface.git
cd Interface
```

2. Abra `index.html` en su navegador web favorito

### Cómo Usar

1. **Escribir Texto**:
   - Haga clic en las teclas del teclado virtual
   - O use su teclado físico para escribir

2. **Caracteres Especiales**:
   - Use los botones amarillos para vocales acentuadas (á, é, í, ó, ú, ü)
   - Use el botón con la letra ñ
   - Use los botones azules para signos de puntuación (¿, ?, ¡, !)

3. **Enviar Texto**:
   - Haga clic en "Enviar" o presione Enter
   - El texto se agregará a la lista de entrada
   - Se generará una respuesta automática en la lista de salida
   - Se crearán prompts relacionados con su entrada

4. **Otras Acciones**:
   - **Retroceso (⌫)**: Borra el último carácter
   - **Limpiar**: Borra todo el texto actual
   - **Escape**: Limpia el texto (teclado físico)

## 📋 Ejemplos de Uso

### Ejemplo 1: Saludo
- **Entrada**: "¡Hola!"
- **Salida**: "¡Entiendo tu emoción! Sobre: '¡Hola!'"
- **Prompts**: 
  - Genera contenido que comience con: "hola"
  - Expresa emoción o énfasis como en: "¡Hola!"

### Ejemplo 2: Pregunta
- **Entrada**: "¿Cómo estás?"
- **Salida**: "Respondiendo a tu pregunta: '¿Cómo estás?'"
- **Prompts**:
  - Genera contenido que comience con: "cómo"
  - Formula una pregunta relacionada con: "¿Cómo estás?"

### Ejemplo 3: Caracteres Especiales
- **Entrada**: "El niño español"
- **Salida**: "¡Excelente uso de la letra ñ en: 'El niño español'!"
- **Prompts**:
  - Genera contenido que comience con: "el"
  - Incluye caracteres especiales del español similar a: "El niño español"

## 🎨 Características de la Interfaz

- **Diseño Responsivo**: Funciona en dispositivos móviles y de escritorio
- **Efectos Visuales**: Animaciones suaves al interactuar
- **Colores Codificados**:
  - Amarillo: Caracteres especiales (vocales acentuadas)
  - Azul: Signos de puntuación españoles
  - Rojo: Retroceso
  - Verde: Enviar
  - Naranja: Limpiar

## 🛠️ Tecnologías

- HTML5
- CSS3 (con gradientes y animaciones)
- JavaScript (Vanilla JS, sin dependencias)

## 📱 Compatibilidad

- ✅ Chrome/Edge (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Dispositivos móviles (iOS/Android)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abra un issue o pull request para sugerencias o mejoras.

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.

## 👤 Autor

karamon21