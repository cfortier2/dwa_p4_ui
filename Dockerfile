FROM rnsloan/emberjs:latest

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --color false
RUN mkdir -p /rentals && cp -a /tmp/node_modules /rentals

COPY . /rentals

WORKDIR /rentals

EXPOSE 4200 35729

ENTRYPOINT ember serve
