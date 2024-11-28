#!/bin/bash

# Set your Docker Hub username
DOCKER_USERNAME="louisdevzz04"
# Image name should match what's in your docker-compose.yml
IMAGE_NAME="quickai-api"
# You can specify a version tag, or use 'latest'
VERSION="latest"

echo "Building Docker image..."
# Build the image using docker-compose
sudo docker-compose build api

echo "Logging in to Docker Hub..."
# Login to Docker Hub (you'll be prompted for password)
sudo docker login

echo "Pushing image to Docker Hub..."
# Push the image to Docker Hub
sudo docker push $DOCKER_USERNAME/$IMAGE_NAME:$VERSION

echo "Done! Image has been pushed to Docker Hub" 