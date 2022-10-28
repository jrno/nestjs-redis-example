## Description

Small example of setting up NestJS with redis caching

## Running it

Start redis
```
docker-compose up 
```

Start app
```
yarn start:dev
```

Populate values to cache:
```
curl localhost:3000/method-cache-test/hello
curl localhost:3000/method-cache-test/123
```

Inspect redis state
```
echo 'KEYS *' | docker-compose exec redis redis-cli
echo 'GET /method-cache-test/hello' | docker-compose exec redis redis-cli
```

## Some issues

- Must use cache-manager v4 with latest NestJS. See https://github.com/node-cache-manager/node-cache-manager/issues/210
- Must use cache-manager-store-redis v2, not 3 with cache-manager v4

