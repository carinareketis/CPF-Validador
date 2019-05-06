# Validador de CPF
Biblioteca salva no NPM que verifica e valida CPF.

**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.**
Na versão atual a biblioteca verifica se o campo está preenchido corretamente, não aceitando menos que 11 digitos, string e caracteres especiais e verifica se o número do cpf é verdadeiro ou falso.

# CPF Validator
Library saved in NPM that verifies and validates CPF.

**This library is intended for validation of CPF numbers, for use in web applications.**
In the current version the library checks if the field is filled correctly, accepting no less than 11 digits, string and special characters and verifies that the cpf number is true or false.

## Como instalar:
## How to install:

```shell

$  npm install cpfvalidatorcarb

```

## Como utilizar:
## How to use:

```node

> const cpfValidator = require("cpfvalidatorcarb");
> console.log(cpfValidator('82291630067'))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação da opção de gerar números válidos de CPF;

#### versão 1.0.0 (released)
- funcionalidades: verifica e valida números de CPF.

## official project roadmap

#### version 2.0.0 (no forecast, contributions accepted)
- implementation of the option to generate valid CPF numbers;

#### version 1.0.0 (released)
- functionalities: verifies and validates CPF numbers.
