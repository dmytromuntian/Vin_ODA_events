FROM node:21.7.3 as builder

WORKDIR /frontend

COPY package.json .
COPY package-lock.json .
RUN npm ci --silent

COPY . .
RUN npm run build

# Copy React static files and start nginx
FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /frontend/build /usr/share/nginx/html

COPY ./nginx/prod /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
