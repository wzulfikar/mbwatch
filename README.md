# mbwatch
***dockerized mountebank with auto-reload***

[WIP]

mountebank documentation: http://www.mbtest.org

Using `example/` to run mountebank with auto-reload enabled:

using npm script, this is what you may do:

```
{
	"name": "catapult-vue",
	"version": "0.1.0",
	"scripts": {
		"mock": "node_modules/.bin/mb --port 8880 --configfile mountebank/imposter.ejs --logfile mountebank/mb.log",
		"mock:watch":"nodemon --watch mountebank --ext js,ejs --exec \"npm run mock\"",
		"mock:stop": "node_modules/.bin/mb stop"
	},
	[...redacted...]
}
```

```
$ cd example
$ docker run -it --rm -p 8001:8001 -p 8002:8002 -v $(pwd)/mountebank:/mountebank wzulfikar/mbwatch --configfile mountebank/imposter.ejs --logfile mountebank/mb.log --allowInjection
```

The `example/` directory contains 2 mountebank mocks, simulating 2 different services. Each running on port 8001 and 8002 respectively.

Run curl from new terminal to check if the services are accessible:

```
$ curl localhost:8001/ping
$ curl localhost:8002/ping
```

- mountebank injection include use path relative to root directory of mountebank files. example:
```
"responses": [
  {
    "inject": "<%- stringify(filename, 'samurai-backend/inject-response/test.js') %>"
  }
]
```
samurai-backend/inject-response/test.js is actually at ~/code/github/mbwatch/example/mountebank/samurai-backend/inject-response/test.js