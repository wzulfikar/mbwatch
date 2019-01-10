# mbwatch
***dockerized mountebank with auto-reload***

[WIP]

mountebank documentation: http://www.mbtest.org

Using `example/` to run mountebank with auto-reload enabled:

```
$ cd example
$ docker run -it --rm -p 8001:8001 -p 8002:8002 -v $(pwd)/mountebank:/mountebank wzulfikar/mbwatch --configfile mountebank/imposter.ejs --logfile mountebank/mb.log
```

The `example/` directory contains 2 mountebank mocks, simulating 2 different services. Each running on port 8001 and 8002 respectively.

Run curl from new terminal to check if the services are accessible:

```
$ curl localhost:8001/ping
$ curl localhost:8002/ping
```
