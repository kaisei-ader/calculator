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
                this.value2 = this.value2 + value
                this.field = this.value2
                break
        }
    }

    selectMethod(value){
        this.method = value
        this.state = 1
        $('.method').css('color','rgba(82,81,81)');
        switch(this.method){
            case 0:
                $('#waru').css('color','red')
                break
            case 1:
                $('#kakeru').css('color','blue')
                break
            case 2:
                $('#hiku').css('color','green')
                break
            case 3:
                $('#tasu').css('color','pink')
                break
            }
    }

    calc(){
        let calcValue = (value1,value2) =>{
            $('.method').css('color','rgba(82,81,81)');
            switch(this.method){
                case 0:
                    this.field = Number(value1) /  Number(value2)
                    break
                case 1:
                    this.field = Number(value1) *  Number(value2)
                    break
                case 2:
                    this.field = Number(value1) -  Number(value2)
                    break
                case 3:
                    this.field = Number(value1) +  Number(value2)
                    break
            }
        }
        calcValue(this.value1,this.value2)
    }
}

const c = new calculator();