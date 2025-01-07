#!/bin/bash

# Function to show usage
show_usage() {
    echo "Usage: ./ghost.sh [command] [environment]"
    echo ""
    echo "Commands:"
    echo "  start   - Start Ghost"
    echo "  stop    - Stop Ghost"
    echo "  restart - Restart Ghost"
    echo "  logs    - Show logs"
    echo ""
    echo "Environments:"
    echo "  dev     - Development environment (default)"
    echo "  prod    - Production environment"
    echo ""
    echo "Examples:"
    echo "  ./ghost.sh start dev    # Start Ghost in development mode"
    echo "  ./ghost.sh start prod   # Start Ghost in production mode"
    echo "  ./ghost.sh stop         # Stop Ghost"
    echo "  ./ghost.sh logs         # Show logs"
}

# Check if command is provided
if [ -z "$1" ]; then
    show_usage
    exit 1
fi

COMMAND=$1
ENV=${2:-dev}  # Default to dev if no environment specified

# Set compose files based on environment
if [ "$ENV" = "prod" ]; then
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.prod.yml"
else
    COMPOSE_FILES="-f docker-compose.yml -f docker-compose.dev.yml"
fi

# Execute command
case $COMMAND in
    "start")
        echo "Starting Ghost in $ENV mode..."
        docker-compose $COMPOSE_FILES up -d
        ;;
    "stop")
        echo "Stopping Ghost..."
        docker-compose down
        ;;
    "restart")
        echo "Restarting Ghost in $ENV mode..."
        docker-compose down
        docker-compose $COMPOSE_FILES up -d
        ;;
    "logs")
        echo "Showing Ghost logs..."
        docker-compose logs -f
        ;;
    *)
        echo "Unknown command: $COMMAND"
        show_usage
        exit 1
        ;;
esac 