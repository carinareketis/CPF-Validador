# Validador de CPF
Biblioteca salva no NPM que verifica e valida CPF.


**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.**
Na versão atual a biblioteca verifica se o campo está preenchido corretamente, não aceitando menos que 11 digitos, string e caracteres especiais e verifica se o número do cpf é verdadeiro ou falso. 

## Como instalar:

```shell

$  npm install validatorcpf-lib

```

## Como utilizar:

```node

> const writtenNumber = require("validatorcpf-lib");
> console.log(writtenNumber(11))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação da opção de gerar números válidos de CPF;

#### versão 1.0.0 (released)
- funcionalidades: verifica e valida números de CPF.
