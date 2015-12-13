FROM rnsloan/emberjs:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

COPY . /rentals

WORKDIR /rentals

EXPOSE 4200 35729

ENTRYPOINT ember serve
