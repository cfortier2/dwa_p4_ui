FROM rnsloan/emberjs:latest

# install apache server
RUN apt-get update && apt-get install apache2 -y

# pre-install npm things
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /rentals && cp -a /tmp/node_modules /rentals

# pre-install bower things
RUN npm install -g bower
ADD bower.json /tmp/bower.json
RUN cd /tmp && bower install --allow-root
RUN cp -a /tmp/bower_components /rentals

# add source code
COPY . /rentals

WORKDIR /rentals

EXPOSE 4200 35729 80

RUN ember build --environment=production
#ENTRYPOINT ember serve
