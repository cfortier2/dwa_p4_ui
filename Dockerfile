FROM rnsloan/emberjs:latest

# install apache server
# Several lines from: https://github.com/docker-library/php/blob/a9f7fed15bc6bb03aa3648560ef4cb0ac79fb612/5.6/apache/Dockerfile
RUN apt-get update && apt-get install -y ca-certificates curl librecode0 libsqlite3-0 libxml2 --no-install-recommends && rm -r /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y apache2-bin apache2.2-common --no-install-recommends && rm -rf /var/lib/apt/lists/*
RUN rm -rf /var/www/html && mkdir -p /var/lock/apache2 /var/run/apache2 /var/log/apache2 /var/www/html && chown -R www-data:www-data /var/lock/apache2 /var/run/apache2 /var/log/apache2 /var/www/html

RUN mv /etc/apache2/apache2.conf /etc/apache2/apache2.conf.dist && rm /etc/apache2/conf-enabled/* /etc/apache2/sites-enabled/*

# set apache conf
COPY ./etc/apache2/apache2.conf /etc/apache2/apache2.conf
COPY ./etc/apache2/sites-enabled/000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./etc/apache2/conf-enabled/security.conf /etc/apache2/conf-enabled/security.conf

# Enable apache rewrite module
RUN a2enmod rewrite

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

# symlink /app/public to /var/www/html
RUN rm -rf /var/www/html && ln -s /app/dist /var/www/html

# chown everything to the apache user
RUN chown -R www-data:www-data /app

COPY apache2-foreground /usr/local/bin/
CMD ["apache2-foreground"]

#ENTRYPOINT ember serve
