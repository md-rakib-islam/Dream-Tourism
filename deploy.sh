#!/bin/bash

docker compose down
docker image rm dreamtourismit-dreamtourismitlive
docker system prune
docker compose up -d
