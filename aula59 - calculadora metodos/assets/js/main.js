function Calculadora() {
    this.display = document.querySelector('.display');
    
    this.inicia = () => {//onde inicia, capturando os cliques e as teclas digitadas
        this.capturaCliques();//cliques
        this.capturaEnter();//teclas
    };

    this.capturaEnter = () => {//capturando teclas
        document.addEventListener('keyup', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {//capturando os eventos de cliques
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {//função que realiza as contas
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                return;
            }

            this.display.value = conta;
        } catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el => {//adicionando números na tela e focando nos valores mostrados
        this.display.value += el.innerText;//adicionando
        this.display.focus();//focando
    };
    this.clear = () => this.display.value = '';//função limpar valores, TODOS
    this.del = () => this.display.value = this.display.value.slice(0, -1);//função limpar valor, no caso UM.
}

const calculadora = new Calculadora();//criação do objeto
calculadora.inicia();//chamando método inicia