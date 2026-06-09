#!/bin/bash

build() {
    docker build -t server -f docker/base.Dockerfile .
}

run() {
    docker run -p 8000:8000 --name server server:latest
    docker rm server
}

help() {
    cat <<EOF
Usage: $(basename "$0") [OPTIONS] <command>

Description of what the docker script does.

Commands:
  build       Build the Docker image
  run         Run the container. Removes after
  migrate     Run Alembic migrations
  help        Show help message

Options:
  -e, --env   ENV     Environment (dev|prod), default: dev
  -h, --help          Show this help message and exit

Examples:
  $(basename "$0") build
  $(basename "$0") run --env prod
EOF
}


case "$1" in
"build") build ;;
"run") run ;;
"help") help ;;
*) help ;;
esac