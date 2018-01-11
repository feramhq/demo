FROM debian

RUN node_version= "0.10" \
  && apt-get update && apt-get -y install nodejs="$node_verson"
ADD package.json usr/src/app
RUN cd /usr/src/app \
  && npm install node-static


EXPOSE 80000

