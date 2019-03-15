class CAdatepicker{
    constructor(){
        this.init = this.init.bind(this);
    }
    init(){
        console.log("Hola Camilo");
    }
}

const ca = new CAdatepicker();
ca.init();
