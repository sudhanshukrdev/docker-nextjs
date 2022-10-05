FROM node:latest

WORKDIR /app

EXPOSE 3000
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts -g

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


# add app
COPY . ./

# start app
CMD ["npm", "run", "dev"]

