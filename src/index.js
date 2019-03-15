class CAdatepicker{
    constructor(){
        this.init = this.init.bind(this);

        this.days = ["Do","Lu","Ma","Mi","Ju","Vi","Sa"];
        this.months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        this.events = ["click"];
    }
    init(){
        console.log("Hola Camilo");
    }
    renderCalendar(){
        const container = document.createElement("div");
        
    }
    createControls(){}

}

const ca = new CAdatepicker();
ca.init();
