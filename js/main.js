var elencoTask = new Vue ({

    el : "#myApp",

    data : {

        newTask: {
            text: "",
            done: "false"
        },

        tasks: [

            {
                text: "cucinare",
                done: false
            },

            {
                text: "Fare la spesa",
                done: true
            },

            {
                text: "Fare il bucato",
                done: false
            },

            {
                text: "Studiare",
                done: false
            },

            {
                text: "uscire il cane",
                done: true
            }
        ]
    },
    
    methods: {
        rimuoviTask(index){

            this.tasks.splice(index, 1);

        },

        addLine(index){

            if(this.tasks[index].done === false){

                this.tasks[index].done = true;

            } else {

                    this.tasks[index].done = false;

                }
        },


        aggiungiTask(){

            this.tasks.push(this.newTask);
            this.newTask = {

                text: "",
                done: false

            }
        }
    }
});