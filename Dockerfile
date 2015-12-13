FROM rnsloan/emberjs:latest

COPY . /rentals

WORKDIR /rentals

EXPOSE 4200 35729

ENTRYPOINT ember serve
