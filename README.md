# Validador de CPF
Criação de biblioteca para verificar e validar de CPF (Biblioteca salva no NPM).


**Esta biblioteca se destina à validação de números de CPF, para uso em aplicações web.**
Na versão atual é capaz de verificar se um CPF é válido a partir da digitação de 11 número.

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
