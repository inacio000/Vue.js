# Ciclo de via

- Criação
    - Preparação do componente
    - Ajax, Inicializar algunas variáveis
    - Sem acesso ao DOM (`Template`)
- Montagem
    - Inicializar uma `lib externa`
        ```javascript
            new Lib();
        ```
    - Com a necessidade de acessar o DOM (`Template`)
    - Com acesso ao DOM (`Template`)
- Atualização
    > Para debugagem
    - Debug
    - Update
- Desmontagem 
    - Remover o que for necessário para liberar memória
        ```javascript
            lib => destroy()
            lib => remove()
            lib => clear()
        ```

## Hooks

```javascript
        beforeCreate(){
            console.log('beforeCreate')
        },
        created(){
            console.log('created')            
        },
        beforeMount(){
            console.log('beforeMount')
        },
        mounted(){
            console.log('mounted')
        },
        beforeUnmount(){
            console.log('beforeUnmount')
        },
        unmounted(){
            console.log('unmounted')
        },
```

## Note
- `Props`: For behavior
- `Slot`: For Content

## Envio de dados entre componentes
- `Props`: Do componente Pai para o componente Filho
- `Emit`: Do componente Filho para o Componente Pai