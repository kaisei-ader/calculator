class calculator {
        constructor(){
        this.init()
    }
    
    init(){
        this.field  = "0";
        this.value1 = "";
    }

    set field(value){
        $(".text1").text(value)
    }
}

const c = new calculator();