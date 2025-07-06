# backend/ecommerce_backend/Dockerfile
FROM python:3.12-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy app code
COPY . .

# Set entrypoint script as the container's startup command
ENTRYPOINT ["/app/entrypoint.sh"]
