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

    setVal(value){
        this.value1 = this.value1 + value
        this.field = this.value1
    }
}

const c = new calculator();