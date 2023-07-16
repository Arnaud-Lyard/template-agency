#!/bin/sh
git fetch origin && git reset --hard origin/main && git clean -f -d && \
docker compose -f docker-compose.yml down && \
docker compose -f docker-compose.yml pull && \
docker compose -f docker-compose.yml --env-file .env.production up -d;