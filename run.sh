#!/bin/bash

# Pull the specific image from Docker Hub
docker pull louisdevzz04/quickai-api:latest

# Build and start the containers in detached mode
sudo docker-compose up -d --build

# Display the container logs
sudo docker-compose logs -f 