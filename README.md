# Bem vindo ao aplicativo Portfólio de Transportadoras

Este aplicativo possui as seguintes operações:

 - Consulta parametrizada ou padrão quando a página inicial é carregada
 - Atualização da transportadora
 - Exclusão de transportadora
 - Cadastramento de novas transportadoras.

Para inicializar o aplicativo é necessário que o usuário navegue até a pasta padrão do projeto via CMD e execute o seguinte comando `ng serve`

# Tela Inicial Consulta Parametrizada
Para acessá-la basta navegar até a rota inicial do sistema [localhost:4200/](localhost:4200/)
Esta tela possui os seguintes filtros para realizar a pesquisa:

 - Nome ou parte do nome
 - UF
 - Município
 - Tipo do modal => Rodoviário, Aquaviário ou Aéreo

Segue um exemplo da tela:
!https://drive.google.com/file/d/15QBLsi99wZjCyYUc1zWydETq-DQB5-7a/view?usp=sharing

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

Segue um exemplo da tela:
https://drive.google.com/file/d/1WAfaYPCXSoMsyFYBU98CXUpeS7CREeuZ/view?usp=sharing

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
 
Segue um exemplo da tela:
https://drive.google.com/file/d/1sjzelT54NoIz0LCbF8RGP7rxyDbshq3W/view?usp=sharing

## Tela inicial sem registros

É possível que ao acessar o sistema pela primeira vez será exibida tela inicial sem os devidos dados cadastrados, neste caso o usuário deverá seguir os passos do cadastramento de uma nova transportadora.

Segue um exemplo da tela:
https://drive.google.com/file/d/13n3RfLnocAYfhmZfD3Ne58OT-SHG_Zg8/view?usp=sharing


## Tela de rota não encontrada
Se o usuário tentar acessar uma rota que não existe no sistema ele será direcionado a tela de page not found.

Segue um exemplo da tela:
https://drive.google.com/file/d/1gOnXhBFaLi-HgiqCFpupiLqtt9L92SlK/view?usp=sharing
