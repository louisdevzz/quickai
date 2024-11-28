#!/bin/bash

# File ID from Google Drive URL
FILE_ID="1XQVw7QVt6q50L-W7jw-fkQNRWNZ4afNs"
OUTPUT_ZIP="model.zip"
EXTRACT_PATH="backend/"

# Check if pip/pip3 is installed
if ! command -v pip3 &> /dev/null && ! command -v pip &> /dev/null; then
    echo "pip is not installed. Installing pip..."
    if command -v apt-get &> /dev/null; then
        sudo apt-get update && sudo apt-get install -y python3-pip
    elif command -v yum &> /dev/null; then
        sudo yum install -y python3-pip
    else
        echo "Error: Package manager not found. Please install pip manually."
        exit 1
    fi
fi

# Install gdown if not already installed
echo "Installing/Upgrading gdown..."
pip3 install --upgrade gdown || pip install --upgrade gdown

# Download the file from Google Drive using gdown
echo "Downloading file from Google Drive..."
gdown "https://drive.google.com/uc?id=${FILE_ID}" -O ${OUTPUT_ZIP}

# Check if download was successful
if [ $? -ne 0 ] || [ ! -f ${OUTPUT_ZIP} ]; then
    echo "Error: Download failed"
    exit 1
fi

# Check file size to ensure it's not empty
if [ ! -s ${OUTPUT_ZIP} ]; then
    echo "Error: Downloaded file is empty"
    rm ${OUTPUT_ZIP}
    exit 1
fi

# Create backend directory if it doesn't exist
mkdir -p ${EXTRACT_PATH}

# Extract the zip file
echo "Extracting files to ${EXTRACT_PATH}..."
unzip -o ${OUTPUT_ZIP} -d ${EXTRACT_PATH}

# Check if extraction was successful
if [ $? -ne 0 ]; then
    echo "Error: Extraction failed"
    exit 1
fi

# Clean up
echo "Cleaning up..."
rm ${OUTPUT_ZIP}

echo "Download and extraction completed successfully!"
