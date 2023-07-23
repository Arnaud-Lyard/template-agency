FROM node:lts-alpine as prod-stage

RUN mkdir /app
WORKDIR /app

COPY css css
COPY img img
COPY scss scss
COPY js js
COPY index.html index.html

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine

ARG NODEJS_API_URL
ENV NODEJS_API_URL ${NODEJS_API_URL}

COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stage 0
COPY --from=prod-stage /app /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]