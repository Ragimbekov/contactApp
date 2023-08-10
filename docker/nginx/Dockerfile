FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./app .

# COPY ../app/package*.json ./

# COPY script.sh /usr/share/nginx/html

# RUN chmod +x /usr/share/nginx/html/script.sh

RUN apt-get update && apt-get install -y npm


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

