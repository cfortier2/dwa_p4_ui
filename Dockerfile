FROM rnsloan/emberjs:latest

COPY . /rentals

WORKDIR /rentals

RUN npm install

EXPOSE 4200 35729

ENTRYPOINT ember serve
