.PHONY : shell
shell:
	docker-compose exec frontend sh

.PHONY : lint
lint:
	docker-compose exec frontend yarn run lint

.PHONY : test
test:
	docker-compose exec frontend yarn run test
