# Bem vindo ao aplicativo Portfólio de Transportadoras

Este aplicativo possui as seguintes operações:

 - Consulta parametrizada ou padrão quando a página inicial é carregada
 - Atualização da transportadora
 - Exclusão de transportadora
 - Cadastramento de novas transportadoras.

Para inicializar o aplicativo é necessário que o usuário navega até a pasta padrão do projeto via CMD e execute o seguinte comando `ng serve`

# Tela Inicial Consulta Parametrizada
Para acessá-la basta navegar até a rota inicial do sistema [localhost:4200/](localhost:4200/)
Esta tela possui os seguintes filtros para realizar a pesquisa:

 - Nome ou parte do nome
 - UF
 - Município
 - Tipo do modal => Rodoviário, Aquaviário ou Aéreo

Abaixo segue um exemplo da tela:
![
](https://lh3.googleusercontent.com/ajpXZ6Vqvob3opKcTaKhm3oR5Rq1qJihpiogRu7Hf9dZP3wvK85TizJldcYknf6bFIe7MR5_rn4m "Tela inicial")

## Tela de Cadastro de Transportadora
Para acessá-la basta navegar até a rota: [localhost:4200/cadastro](localhost:4200/cadastro)
Para realizar o cadastro é necessário que o usuário preencha todos os campos obrigatórios e concorde com os termos de uso.
Os campos obrigatórios são:

 - Email
 - Nome
 - Empresa
 - Telefone
 - Modal
 - Rua
 - Número
 - Bairro
 - Cidade
 - UF
 - Concordar com os Termos de Uso

Abaixo segue um exemplo da tela:
![
](https://lh3.googleusercontent.com/__GrydDS2YrImN46AzPjTFQ2bDAhVhJ-wmjBo8KbYE3Cv66EUr92QTW5FV9Sy9htcafuV44QSXAe "tela de cadastro")

## Tela Alterar / Deletar Transportadora

Para acessá-la basta navegar até a rota: [localhost:4200/alterar/:id](localhost:4200/alterar/1) onde o :id é um número do tipo inteiro ou clicar no link na tela inicial de Nome da Empresa.
Para deletar o registro basta que o usuário clique em deletar e após feito será redirecionado para tela inicial em 5 segundos.

É necessário que o usuário preencha todos os campos obrigatórios, esta tela possui a mesma validação de campos que a tela de cadastramento.

Os campos obrigatórios são:
 - Email
 - Nome
 - Empresa
 - Telefone
 - Modal
 - Rua
 - Número
 - Bairro
 - Cidade
 - UF
 
Abaixo segue um exemplo da tela:
![
](https://lh3.googleusercontent.com/UZdgzTEsx5a61lY2g5Prfy_2yvczJSOCGRXoWFxGtCYtSnGPaol15laC_240MK4AzoHjwTpzkWAg "tela de alterar")

## Tela inicial sem registros

É possível que ao acessar o sistema pela primeira vez será exibida tela inicial sem os devidos dados cadastrados, neste caso o usuário deverá seguir os passos do cadastramento de uma nova transportadora.

Abaixo segue um exemplo da tela:
![enter image description here](https://lh3.googleusercontent.com/fOhk0n5-zv7OI7oKpaBMw6W-mRge4UUU80Z6bHoCdoWpHfceYLRPHhGTSu0j8saxzQVn6P1Uwosc "tela sem registros")


## Tela de rota não encontrada
Se o usuário tentar acessar uma rota que não existe no sistema ele será direcionado a tela de page not found.

Abaixo segue um exemplo da tela:
![
](https://lh3.googleusercontent.com/mH8I-j1RDPBvX6WyJopncBWZEss3NKvwvRkBoyvySUY15XqTjbjIa8kSDSsqGH2SCkmK2nQ683Yq "rota não encontrada")
