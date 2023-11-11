# Dockerized Keycloak with Postgres

## Description

This project defines a Docker Compose configuration to run a Keycloak service with a PostgreSQL database.
The provided `docker-compose.yml` file defines two services - `postgres` and `keycloak`. The PostgreSQL service stores
Keycloak data, and the Keycloak service provides identity and access management.

## Prerequisites

Before starting the services, make sure to:

1. Rename the `example.env` file to `.env`.
2. Fill in the necessary environment variables in the `.env` file.

## Getting Started

Follow the steps below to run the services:

1. Rename and configure the environment variables:
    - Rename `example.env` to `.env`.
    - Open `.env` and fill in the required values for PostgreSQL and Keycloak.

2. Start the services:
   ```bash
   docker-compose up -d
   ```

3. Access Keycloak at [http://localhost:8080](http://localhost:8080) and log in using the configured admin credentials.

## Environment Variables

### PostgreSQL (example.env)

- `POSTGRESQL_USERNAME`: PostgreSQL username.
- `POSTGRESQL_PASSWORD`: PostgreSQL password.
- `POSTGRESQL_DATABASE`: PostgreSQL database name for Keycloak.
- `POSTGRESQL_LOG_TIMEZONE`: PostgreSQL log timezone.
- `POSTGRESQL_TIMEZONE`: PostgreSQL timezone.

### Keycloak (example.env)

- `KEYCLOAK_HTTP_PORT`: Keycloak HTTP port.
- `KEYCLOAK_CREATE_ADMIN_USER`: Set to `true` to create an admin user.
- `KEYCLOAK_ADMIN_USER`: Keycloak admin user.
- `KEYCLOAK_ADMIN_PASSWORD`: Keycloak admin password.
- `KEYCLOAK_DATABASE_HOST`: PostgreSQL database host.
- `KEYCLOAK_DATABASE_PORT`: PostgreSQL database port.
- `KEYCLOAK_DATABASE_NAME`: PostgreSQL database name for Keycloak.
- `KEYCLOAK_DATABASE_USER`: PostgreSQL database user for Keycloak.
- `KEYCLOAK_DATABASE_PASSWORD`: PostgreSQL database password for Keycloak.
- `KEYCLOAK_JDBC_PARAMS`: Additional JDBC parameters for Keycloak.

## Notes

- The health check for the PostgreSQL service ensures that Keycloak can connect to the database.
- Access Keycloak at [http://localhost:8080](http://localhost:8080) after starting the services.

Feel free to customize the environment variables and configurations based on your specific requirements.
