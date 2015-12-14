FROM rnsloan/emberjs:latest

# pre-install npm things
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /rentals && cp -a /tmp/node_modules /rentals

# pre-install bower things
RUN npm install -g bower
ADD bower.json /tmp/bower.json
RUN cd /tmp && bower install
RUN cp -a /tmp/bower_components /rentals

# add source code
COPY . /rentals

WORKDIR /rentals

EXPOSE 4200 35729

ENTRYPOINT ember serve
