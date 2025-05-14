FROM python:3.11-slim

# Install any Linux deps you need
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
         unixodbc unixodbc-dev libmdbodbc \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy only requirements first to leverage layer caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Now copy the rest of the code
COPY . .

EXPOSE 8000
ENV PYTHONUNBUFFERED=1

# Adjust the CMD to whatever your start command is
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8000"]
