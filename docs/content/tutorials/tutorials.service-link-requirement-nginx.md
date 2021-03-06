+++
title = "Service Requirement Nginx"
weight = 5

[menu.main]
parent = "tutorials"
identifier = "tutorials-service-requirement"

+++

#### Add the service requirement

* Name: `mypg`. This will be the service hostname
* Type: `service`
* Value: `nginx:1.11.1`. This is the name of docker image to link to current job

And a requirement model which allow you to execute `apt-get install -y postgresql-client`

worker-model-docker-simple.md

![Requirement](/images/tutorials_service_link_nginx_requirements.png)

#### Add a step of type `script`

docker image `nginx:1.11.1` start a nginx at startup. So, it's now available on `http://mynginx`

```bash
curl -v -X GET http://mynginx
```

![Step](/images/tutorials_service_link_nginx_job.png)

**Execute Pipeline**

See output:

![Log](/images/tutorials_service_link_nginx_log.png)
