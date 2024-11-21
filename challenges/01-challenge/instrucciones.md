# 💻 Reto 01: Calculadora de Reloj Digital 🕒

## 📝 Descripción

En este reto, tu tarea será implementar un **backend simple** que convierta una cantidad de segundos en un formato de reloj digital **HH:MM:SS**. El frontend ya está creado y solo necesita comunicarse con tu backend. ¡Tú decides el lenguaje y framework a usar!

---

## 🎯 Objetivo

Crear un **endpoint REST** que procese la cantidad de segundos que recibe y devuelva el resultado en formato de reloj.

---

## 📂 Estructura del Reto
```
reto-01/
├── frontend/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
├── backend/
├── intrucciones.md


```
---
## 🚀 ¿Qué tienes que hacer?

1. **Crea un servidor backend** que escuche en `http://localhost:3000`.
2. Implementa un endpoint **GET /convert** que:
   - Reciba un parámetro seconds en la URL:
     ```
     http://localhost:3000/convert?seconds=3661
     ```
   - Devuelva el tiempo en formato **HH:MM:SS**:
     ```json
     { "time": "01:01:01" }
     ```
   - Si el parámetro seconds no es un número válido (por ejemplo, negativo o no numérico), responde con un error **400**:
     ```json
     { "error": "Invalid input. Seconds must be a positive integer." }
     ```

---

## 🛠️ ¿Cómo probarlo?

1. Abre el archivo `frontend/index.html` en tu navegador.
2. Ingresa los segundos en la interfaz y haz clic en **Calcular**.
3. La página hará una llamada a tu backend a través de la siguiente URL con el valor de los segundos
     ```
     http://localhost:3000/convert?seconds=${seconds}
     ```
     Y mostrará el resultado en formato HH:MM:SS.

---

## 📑 Requisitos

- **Entrada válida:** El número de segundos debe ser un entero positivo.
- **Salida esperada:** Formato correcto **HH:MM:SS**.
- **Lenguaje libre:** Usa el lenguaje o framework que prefieras.
- **Sin librerias:** No se deben utilizar librerías externas para realizar el cálculo de los segundos a formato de reloj.

---

¡Eso es todo! Este reto está diseñado para ser rápido y divertido. ¿Listo para demostrar tus habilidades? 💪
