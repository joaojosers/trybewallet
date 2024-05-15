# trybewallet

# Contexto
- Desenvolver aplicação de uma carteira de controle de gastos com conversor de moedas.

# A aplicação deverá permitir a pessoa usuária:
- Adicionar, remover e editar um gasto.
- Visualizar sua tabela de gastos.
- Visualizar o total de gastos convertidos para uma moeda de sua escolha.
# Habilidades
- Criar um store Redux em aplicações React.
- Criar reducers no Redux em aplicações React.
- Criar actions no Redux em aplicações React.
- Criar dispatchers no Redux em aplicações React.
- Usar os hooks do redux para manipulação e leitura do estado global.
- Criar actions assíncronas na aplicação React que faz uso de Redux.

# Desenvolvimento
- No projeto, você vai desenvolver uma carteira de controle de gastos com conversor de moedas utilizando o Redux React. Na implementação, você deverá obrigatoriamente utilizar o seguinte formato do estado global:
```
  {
    user: {
      email: '', // string que armazena o e-mail da pessoa usuária
    },
    wallet: {
      currencies: [], // array de string
      expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
      editor: false, // valor booleano que indica se uma despesa está sendo editada
      idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
    }
  }
```
## Arquivos desenvolvidos pela Trybe
* src:
  - package.json
  - package-lock.json
