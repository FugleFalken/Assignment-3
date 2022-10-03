Vue.createApp({

    data() {

        return {
            word: "",
            repetitions: 0,
            output: ""
        }

    },

    methods: {

        DoIt(){
            if(this.repetitions < 0) this.output = "must be a none-negative number: " + this.repetitions
            else{
                this.output = ""
                for(i = 0; i < this.repetitions; i++){
                    this.output += this.word
                }
            }
        }

    }

}).mount("#app")