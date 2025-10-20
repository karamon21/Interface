// Estado de la aplicación
let currentText = '';
let inputHistory = [];
let outputHistory = [];

// Elementos del DOM
const displayContent = document.getElementById('displayContent');
const inputList = document.getElementById('inputList');
const outputList = document.getElementById('outputList');
const promptsDisplay = document.getElementById('promptsDisplay');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const backspaceBtn = document.getElementById('backspace');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initializeKeyboard();
    initializeDisplay();
    updateDisplay();
});

// Inicializar el teclado virtual
function initializeKeyboard() {
    const keys = document.querySelectorAll('.key[data-key]');
    
    keys.forEach(key => {
        key.addEventListener('click', (e) => {
            e.preventDefault();
            const char = key.getAttribute('data-key');
            addCharacter(char);
            animateKey(key);
        });
    });

    // Botón de enviar
    sendBtn.addEventListener('click', () => {
        sendText();
        animateKey(sendBtn);
    });

    // Botón de limpiar
    clearBtn.addEventListener('click', () => {
        clearText();
        animateKey(clearBtn);
    });

    // Botón de retroceso
    backspaceBtn.addEventListener('click', () => {
        backspace();
        animateKey(backspaceBtn);
    });

    // Soporte para teclado físico
    document.addEventListener('keydown', handlePhysicalKeyboard);
}

// Inicializar la pantalla interactiva
function initializeDisplay() {
    displayContent.addEventListener('click', () => {
        displayContent.classList.remove('empty');
    });
}

// Manejar teclado físico
function handlePhysicalKeyboard(e) {
    // Prevenir comportamiento por defecto para algunas teclas
    if (e.key === 'Enter' || e.key === 'Escape') {
        e.preventDefault();
    }

    if (e.key === 'Enter') {
        sendText();
    } else if (e.key === 'Escape') {
        clearText();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        backspace();
    } else if (e.key.length === 1) {
        addCharacter(e.key);
    }
}

// Agregar carácter al texto actual
function addCharacter(char) {
    currentText += char;
    updateDisplay();
}

// Retroceder un carácter
function backspace() {
    if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        updateDisplay();
    }
}

// Limpiar el texto actual
function clearText() {
    currentText = '';
    updateDisplay();
}

// Actualizar la pantalla de visualización
function updateDisplay() {
    if (currentText === '') {
        displayContent.textContent = 'Toca aquí para comenzar a escribir...';
        displayContent.classList.add('empty');
    } else {
        displayContent.textContent = currentText;
        displayContent.classList.remove('empty');
    }
}

// Enviar texto
function sendText() {
    if (currentText.trim() === '') {
        return;
    }

    // Agregar a la lista de entrada
    addToInputList(currentText);
    
    // Generar respuesta y prompt
    const response = generateResponse(currentText);
    const prompt = generatePrompt(currentText);
    
    // Agregar a la lista de salida
    addToOutputList(response);
    
    // Mostrar el prompt generado
    addPromptDisplay(currentText, prompt);
    
    // Limpiar el texto actual
    clearText();
}

// Agregar a la lista de entrada
function addToInputList(text) {
    inputHistory.push(text);
    const li = document.createElement('li');
    li.textContent = `📝 ${text}`;
    inputList.appendChild(li);
    inputList.scrollTop = inputList.scrollHeight;
}

// Agregar a la lista de salida
function addToOutputList(text) {
    outputHistory.push(text);
    const li = document.createElement('li');
    li.textContent = `💬 ${text}`;
    outputList.appendChild(li);
    outputList.scrollTop = outputList.scrollHeight;
}

// Generar respuesta basada en el texto de entrada
function generateResponse(input) {
    const lowerInput = input.toLowerCase().trim();
    
    // Respuestas basadas en patrones
    if (lowerInput.includes('hola')) {
        return '¡Hola! ¿Cómo estás?';
    } else if (lowerInput.includes('adiós') || lowerInput.includes('adios')) {
        return '¡Hasta luego! Que tengas un buen día.';
    } else if (lowerInput.includes('¿') || lowerInput.includes('?')) {
        return `Respondiendo a tu pregunta: "${input}"`;
    } else if (lowerInput.includes('¡') || lowerInput.includes('!')) {
        return `¡Entiendo tu emoción! Sobre: "${input}"`;
    } else if (lowerInput.includes('ñ')) {
        return `¡Excelente uso de la letra ñ en: "${input}"!`;
    } else if (hasSpecialChars(input)) {
        return `¡Perfecto! Has usado caracteres especiales en: "${input}"`;
    } else {
        return `Procesado: "${input}"`;
    }
}

// Verificar si tiene caracteres especiales españoles
function hasSpecialChars(text) {
    const specialChars = ['á', 'é', 'í', 'ó', 'ú', 'ü', 'ñ'];
    return specialChars.some(char => text.toLowerCase().includes(char));
}

// Generar prompt basado en el texto de entrada
function generatePrompt(input) {
    const words = input.toLowerCase().trim().split(/\s+/);
    const firstWord = words[0] || '';
    const lastWord = words[words.length - 1] || '';
    
    let prompts = [];
    
    // Prompt basado en la primera palabra
    if (firstWord) {
        prompts.push(`Genera contenido que comience con: "${firstWord}"`);
    }
    
    // Prompt basado en la longitud
    if (words.length > 1) {
        prompts.push(`Crea una frase de ${words.length} palabras relacionada con: "${input}"`);
    }
    
    // Prompt basado en caracteres especiales
    if (hasSpecialChars(input)) {
        prompts.push(`Incluye caracteres especiales del español similar a: "${input}"`);
    }
    
    // Prompt basado en signos de puntuación
    if (input.includes('¿') || input.includes('?')) {
        prompts.push(`Formula una pregunta relacionada con: "${input}"`);
    }
    
    if (input.includes('¡') || input.includes('!')) {
        prompts.push(`Expresa emoción o énfasis como en: "${input}"`);
    }
    
    // Prompt general si no hay características especiales
    if (prompts.length === 0) {
        prompts.push(`Genera texto relacionado con: "${input}"`);
    }
    
    return prompts.join('\n');
}

// Mostrar el prompt generado
function addPromptDisplay(input, prompt) {
    const promptItem = document.createElement('div');
    promptItem.className = 'prompt-item';
    
    const inputDiv = document.createElement('div');
    inputDiv.className = 'input-text';
    inputDiv.textContent = `Entrada: ${input}`;
    
    const promptDiv = document.createElement('div');
    promptDiv.className = 'generated-prompt';
    promptDiv.innerHTML = prompt.split('\n').map(p => `• ${p}`).join('<br>');
    
    promptItem.appendChild(inputDiv);
    promptItem.appendChild(promptDiv);
    promptsDisplay.appendChild(promptItem);
    
    // Scroll automático
    promptsDisplay.scrollTop = promptsDisplay.scrollHeight;
}

// Animar tecla al presionar
function animateKey(keyElement) {
    keyElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        keyElement.style.transform = '';
    }, 100);
}

// Funcionalidad adicional: sugerencias de palabras
function getSuggestions(text) {
    const suggestions = [
        'hola', 'adiós', 'gracias', 'por favor', 'buenos días',
        'buenas tardes', 'buenas noches', '¿cómo estás?',
        'español', 'teclado', 'interfaz', 'año', 'niño',
        'mañana', 'señor', 'señora', 'pequeño'
    ];
    
    if (!text) return [];
    
    return suggestions.filter(s => 
        s.toLowerCase().startsWith(text.toLowerCase())
    ).slice(0, 5);
}

// Exportar funciones para testing (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addCharacter,
        backspace,
        clearText,
        generateResponse,
        generatePrompt,
        hasSpecialChars,
        getSuggestions
    };
}
