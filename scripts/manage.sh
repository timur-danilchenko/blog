#!/bin/bash

dev() {
  uv run fastapi dev
}

help() {
  cat <<EOF
Usage: $(basename "$0") [OPTIONS] <command>

Description of what the docker script does.

Commands:
  dev         Run the container. Removes after
  help        Show help message

Examples:
  $(basename "$0") dev
EOF
}


case "$1" in
"dev") dev ;;
"help") help ;;
*) help ;;
esac