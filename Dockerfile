# set base image (host OS)
FROM python:3.8
FROM mongo:4.4

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install Python 3 and pip
RUN apt-get -y update && apt-get install -y python3 python3-pip

# Update pip to the latest version
RUN python3 -m pip install --upgrade pip

# RUN apt-get -y update
RUN apt-get install -y curl nano wget nginx git

# RUN apt-get install -y python && apt-get install -y pip
# RUN python -m pip install --upgrade pip

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list


# Mongo
RUN ln -s /bin/echo /bin/systemctl
RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -
RUN echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list
RUN apt-get -y update
RUN apt-get install -y mongodb-org

# Install Yarn
RUN apt-get install -y yarn

# Install PIP
# RUN apt-get update && apt-get install -y python-setuptools
# RUN easy_install pip
# RUN apt-get update && apt-get install -y python3
# RUN apt-get update && apt-get install -y pip

ENV ENV_TYPE staging
ENV MONGO_HOST mongo
ENV MONGO_PORT 27017
# ENV PATH /usr/bin/python3.8:$PATH
##########

ENV PYTHONPATH=$PYTHONPATH:/src/

# copy the dependencies file to the working directory
COPY src/requirements.txt .

# install dependencies
RUN pip install -r requirements.txt

CMD ["python3", "manage.py"]