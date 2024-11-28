#!/bin/bash

# Pull the latest images
sudo docker-compose pull

# Build and start the containers in detached mode
sudo docker-compose up -d --build

# Display the container logs
sudo docker-compose logs -f 