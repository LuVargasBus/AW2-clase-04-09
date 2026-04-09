# AW2 - Clase 04/09

Repositorio de lo trabajado en clase

---

## 🧩 Comandos básicos de GIT

- `git init` → solo la primera vez  
- `git config user.name "miusuario"` → la primera vez  
- `git config user.email "miemail@mail.com"` → la primera vez  
- `git remote add origin https://github.com/miusuario/mirepositorio.git` → configurar repo remoto  

### 📄 Crear README
- Creamos un `README.md`

### 📌 Seguimiento de archivos
- `git status` → ver estado de seguimiento (README.md aparece en rojo)  
- `git add .` o `git add ruta/nombreDeArchivo` → marcar archivos para guardar  
- `git status` → verificar si README.md está listo (staged, aparece en verde)  

### 💾 Guardar cambios
- `git commit -m "primer commit"` → guardar en repositorio local  

### 🌿 Ramas
- `git branch` → ver si la rama es `main` o `master`  
- `git branch -M main` → cambiar nombre a `main`  

### 🚀 Subir al repositorio
- `git push -u origin main` → subir al repositorio remoto  

---

## 🔁 Flujo al finalizar la clase

- `git add .` → marcar archivos  
- `git status` → verificar cambios  
- `git commit -m "mensaje sobre lo trabajado"`  
- `git push` → actualizar repositorio remoto  

> ⚠️ No hace falta indicar `origin main` porque ya se configuró con `-u`  
> ⚠️ Atención si trabajan con ramas separadas  

---

## 🏠 Trabajo en casa

### 📥 Clonar repositorio
- `git clone https://github.com/miusuario/mirepositorio.git` → solo una vez  

### 👤 Configuración
- `git config user.name "miusuario"`  
- `git config user.email "miemail@mail.com"`  

### 🔄 Mantener actualizado
- `git pull` → bajar cambios y sincronizar  

---

## 📦 Comandos básicos de NPM

- `npm init -y` → solo la primera vez  
- Verificar configuración en `package.json`  
- `npm install un-paquete otro-paquete` → instalar paquetes  

### ⚙️ Scripts
- Configurar en `"scripts"` (ejemplo):  
  ```json
  "dev": "node index.js"
