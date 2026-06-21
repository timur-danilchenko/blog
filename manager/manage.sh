#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

ROOT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
    cat <<EOF
Usage: $(basename "$0") <up|down> [config_path]

Commands:
  up      Start services listed in config (default: local.conf)
  down    Stop services listed in config (default: local.conf)

Examples:
  $(basename "$0") up
  $(basename "$0") down ./my.conf
EOF
}

# ---- args ----
COMMAND="${1:-}"
CONFIG_PATH="${2:-"$ROOT_PATH/local.conf"}"

if [[ -z "$COMMAND" ]]; then
    usage
    exit 1
fi

if [[ ! -f "$CONFIG_PATH" ]]; then
    echo "Config file not found: $CONFIG_PATH" >&2
    exit 1
fi

# ---- read services from config.conf (Python-style list) ----
SERVICES=$(python3 -c "
exec(open('$CONFIG_PATH').read())
print(' '.join(services))
")

if [[ -z "$SERVICES" ]]; then
    echo "No services defined in $CONFIG_PATH" >&2
    exit 1
fi

echo "Using config: $CONFIG_PATH"
echo "Services: $SERVICES"

case "$COMMAND" in
  up)
    docker compose up -d $SERVICES
    ;;
  down)
    docker compose stop $SERVICES
    ;;
  *)
    echo "Unknown command: $COMMAND" >&2
    usage
    exit 1
    ;;
esac