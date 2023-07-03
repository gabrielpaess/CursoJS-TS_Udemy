class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //Método de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }
    //método estático
    static soma(x, y) {
        console.log(this);
    }
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();
