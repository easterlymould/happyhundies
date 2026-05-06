# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 8080 available to the world outside this container
RUN mkdir -p /app/data

EXPOSE 8080

CMD ["gunicorn", "wsgi:application", "--bind", "0.0.0.0:8080", "--workers", "2"]
