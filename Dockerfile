# Establecer la imagen base de Node.js
ARG NODE_VERSION=16.17.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="NodeJS"

# Directorio de trabajo de la aplicación NodeJS
WORKDIR /app

# Establecer el entorno de producción
ENV NODE_ENV=production

# Copiar los archivos de configuración de la aplicación
COPY package*.json ./

# Instalar las dependencias
RUN npm install --production

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto que utiliza tu aplicación
EXPOSE 8021

# Iniciar el servidor
CMD ["npm", "start"]
