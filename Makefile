.PHONY: docs clean

COMMAND = docker-compose run --rm xaralafrntend /bin/bash -c

all: build test

build:
	docker-compose build

run:
	docker-compose up


test:
	$(COMMAND) "pip install tox && tox -e test"

checksafety:
	$(COMMAND) "pip install tox && tox -e checksafety"

checkstyle:
	$(COMMAND) "pip install tox && tox -e checkstyle"

coverage:
	$(COMMAND) "pip install tox && tox -e coverage"

clean:
	rm -rf node_modules
	rm package-lock.json

dockerclean:
	docker system prune -f
	docker system prune -f --volumes

dev:
	npm run dev

setup:
	npm run clean
	npm run build:tailwind
	npm run dev

push:
	git push

deploy:
	git pull
	npm install
	npm run build
	pm2 restart xarala

codestyle:
