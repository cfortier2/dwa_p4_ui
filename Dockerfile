FROM rnsloan/emberjs:latest

# install apache server
RUN apt-get update && apt-get install apache2 -y

# pre-install npm things
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app

# pre-install bower things
RUN npm install -g bower
ADD bower.json /tmp/bower.json
RUN cd /tmp && bower install --allow-root
RUN cp -a /tmp/bower_components /app

# add source code
COPY . /app

WORKDIR /app

RUN ember build --environment=production

EXPOSE 4200 35729 80

# set apache conf
COPY ./etc/apache2/sites-enabled/000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./etc/apache2/conf-enabled/security.conf /etc/apache2/conf-enabled/security.conf

# Enable apache rewrite module
RUN a2enmod rewrite

# symlink /app/public to /var/www/html
RUN rm -rf /var/www/html && ln -s /app/dist /var/www/html

# chown everything to the apache user
RUN chown -R www-data:www-data /app

#COPY apache2-foreground /usr/local/bin/
CMD ["apache2-foreground"]

#ENTRYPOINT ember serve
