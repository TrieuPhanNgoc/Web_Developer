FROM Ubuntu:latest
COPY * /tmp/
RUN apt-get update && apt-get install -y build-essential npm
RUN cd /tmp && npm i inquirer qr-image sillyname superheroes
CMD [ node index.js ]
