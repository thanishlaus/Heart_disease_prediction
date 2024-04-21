# Use official Python image as base
FROM python:3.11
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN python -m venv /venv
RUN pip install djangorestframework
RUN pip install django-cors-headers
RUN pip install pandas
RUN pip install numpy
RUN pip install scikit-learn
RUN pip install adrf
# Set the working directory in the container
WORKDIR /backend
# Copy the backend source code to the working directory
COPY . .
# Run Django migrations and collect static files
# Expose port 8000 to the outside world
EXPOSE 8000
# Command to run the Django server
CMD ["python", "manage.py", "runserver", "127.0.0.1:8000"]