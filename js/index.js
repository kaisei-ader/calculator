class calculator {
        constructor(){
        this.init()
    }
    
    init(){
        this.field  = "0";
        this.value1 = "";
        this.value2 = "";
        this.state = 0;
        this.method = 0;
    }

    set field(value){
        $(".text1").text(value)
    }

    setVal(value){
        switch(this.state){
            case 0:
                console.log(value)
                this.value1 = this.value1 + value
                this.field = this.value1
                break
            case 1:
                console.log(value)
                this.value2 = this.value + value
                this.field = this.value2
                break
        }
    }

    selectMethod(value){
    this.method = value
    this.state = 1
    }
}

const c = new calculator();