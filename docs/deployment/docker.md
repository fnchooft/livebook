# Docker

There are two main use cases to deploy Livebook in the cloud. The first is to read and write notebooks in the cloud, instead of your machine. The second is to deploy notebooks as applications. This guide covers both as well other details such as clustering.

## Livebook in the cloud

You can deploy Livebook inside your infrastructure using Docker. The Dockerfile below provides a great starting point:

```dockerfile
FROM ghcr.io/livebook-dev/livebook

# Configure your port accordingly
ENV LIVEBOOK_PORT 7860
EXPOSE 7860

# If you have a persistent volume, configure it here
ENV LIVEBOOK_DATA_PATH "/data"
USER root
RUN mkdir -p /data
RUN chmod 777 /data
```

We also recommend setting the `LIVEBOOK_PASSWORD` environment variable to a secret value. If it is not set, you will find the token to access Livebook in the logs. See all other supported [environment variables](../../README.md#environment-variables) to learn more.

If you want to run several Livebook instances behind a load balancer, you need to enable clustering. See the [Clustering](clustering.md) section.

If you plan to limit access to your Livebook via a proxy, we recommend leaving the "/public" route of your instances still public. This route is used for integration with the [Livebook Badge](https://livebook.dev/badge/) and other conveniences.

### Docker compose

If using Docker Compose the following template is a good starting point:

```yml
services:
  livebook:
    image: ghcr.io/livebook-dev/livebook
    ports:
      - 8090:8090
      - 8091:8091
    environment:
      - LIVEBOOK_PORT=8090
      - LIVEBOOK_IFRAME_PORT=8091
```

## Deploy notebooks as applications

It is possible to deploy any notebook as an application in Livebook. Inside the notebook, open up the Application pane on the sidebar (with a rocket icon), click "Deploy with Docker", and follow the required steps. You will be able to choose a Livebook image, preset clustering options, and more.

If you are using [Livebook Teams](https://livebook.dev/teams/), you will also have access to airgapped notebook deployment with pre-configured Zero Trust Authentication, shared team secrets and file storages. To get started, open up Livebook, click "Add Organization" on the sidebar, and visit the "Airgapped Deployment" section of your organization.
