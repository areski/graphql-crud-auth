#Build
FROM mhart/alpine-node:12 AS builder

WORKDIR /app
COPY . .

RUN npm install react-scripts -g
RUN yarn install
RUN yarn run build


#Serve
FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]