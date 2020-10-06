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
        this.changeClear = true;
    }

    set field(value){
        $(".text1").text(value)
    }
    
    get field(){
        return Number($(".text1").text())
    }

    set changeClear(value){
        $('#' + (value ? 'c' : 'ac')).css('display', 'none')
        $('#' + (!value ? 'c' : 'ac')).css('display', 'inline')
    }

    adDot(){
        switch(this.state){
            case 0:
                let search1 = this.value1.includes('.');
                if(!search1){
                    this.value1 = this.field + '.'
                    this.field = this.value1
                }
                break
            case 1:
            case 2:
                let search2 = this.value2.includes('.');
                if(!search2){
                    this.value2 = this.field + '.'
                    this.field = this.value2
                }
                break
        }
    }

    clear(){
        switch(this.state){
            case 0:
                let result = this.value1.slice(0, -1);
                if(result === ''){
                this.field = "0"
                this.value1 =""
                this.changeClear = true
                } else {
                this.value1 = result.toString()
                this.field = this.value1
                }
                break
            case 1:
            case 2:
                let result2 = this.value2.slice(0, -1);
                if(result2 === ''){
                    this.field = "0"
                    this.value2 =""
                    this.changeClear = true
                } else {
                    this.value2 = result2.toString()
                    this.field = this.value2
                }
                break
        }
    }

    changeVal(value){
        switch(this.state){
            case 0:
                this.value1 = value
                this.field = this.value1
                break
            case 1:
            case 2:
                this.value2 = value
                this.field = this.value2
                break
        }
        this.changeClear = true
    }

    setVal(value){
        switch(this.state){
            case 0:
                this.value1 = this.value1 + value
                this.field = this.value1
                this.changeClear = false
                break
            case 1:
                this.value2 = value.toString()
                this.field = this.value2
                this.state = 2
                this.changeClear = false
                break
            case 2:
                this.value2 = this.value2 + value
                this.field = this.value2
                break
        }
    }

    selectMethod(value){
        switch(this.state){
            case 3:
                this.value1 = this.field.toString()
                break
        }
        this.method = value
        this.state = 1
        $('.method').css({'box-shadow':'7px 7px 14px #bec4c9, -7px -7px 14px #fff','transition':'all 0.1s'});
        switch(this.method){
            case 0:
                $('#waru').css('box-shadow',boxshadowPushed)
                break
            case 1:
                $('#kakeru').css('box-shadow',boxshadowPushed)
                break
            case 2:
                $('#hiku').css('box-shadow',boxshadowPushed)
                break
            case 3:
                $('#tasu').css('box-shadow',boxshadowPushed)
                break
            }
    }

    calc(){
        let calcValue = (value1,value2) =>{
            $('.method').css('box-shadow','7px 7px 14px #bec4c9, -7px -7px 14px #fff');
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
        this.changeClear = true
        this.state = 3
    }
}

let boxshadowPushed =`
inset 7px 7px 14px #bec4c9,
inset -7px -7px 14px #fff`

const c = new calculator();