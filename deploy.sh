#!/bin/bash

docker compose down
docker image rm demodreamtourismit-dreamtourismit
docker system prune
docker compose up -d
