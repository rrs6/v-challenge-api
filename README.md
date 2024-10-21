Para rodar o projeto, é necessario primeiro subir o container do Banco de Dados.
Rode o comando
docker compose up -d

Logo após, rode as migrations com o comando abaixo.
npx ts-node -r tsconfig-paths/register ./node_modules/.bin/typeorm migration:run -d ./src/db/datasource.ts

Caso precise reverter, rode.
npx ts-node -r tsconfig-paths/register ./node_modules/.bin/typeorm migration:revert -d ./src/db/datasource.ts

Logo depois da migration finalizar, pode rodar o npm run start.
