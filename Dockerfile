FROM nginx
LABEL name='manas'
ENV NAME manas                      
COPY ./build/ /usr/share/nginx/html/
