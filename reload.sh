#!/bin/bash
git pull
docker rm -f remix_test_app
docker build -t remix_test_app .
docker run -d -p 3333:3000 --name remix_test_app remix_test_app