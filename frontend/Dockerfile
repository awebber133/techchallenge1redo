FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN echo "force rebuild $(date)"
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]