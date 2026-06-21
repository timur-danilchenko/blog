#!/bin/bash

setup() {
  uv run alembic upgrade head
}

dev() {
  setup
  uv run fastapi dev
}

help() {
  cat <<EOF
Usage: $(basename "$0") [OPTIONS] <command>

Description of what the docker script does.

Commands:
  setup       Setup environment for development
  dev         Run the container. Removes after
  help        Show help message

Examples:
  $(basename "$0") dev
EOF
}

case "$1" in
"setup") setup ;;
"dev") dev ;;
"help") help ;;
*) help ;;
esac