var express = require("express");
var server = express();
var bodyParser = require("body-parser");
server.use(bodyParser.json());
var model = {
    clients:{},
    reset:function(){
        this.clients={};
    },
    addAppointment:function(name, date,status){
        clients:{
            //'javier':[{date:'blbla', 'status':'pending'}, {date: 'blabla2', 'status:'pending}]
        }

        this.clients[name]?
        this.clients[name].push(date)
        :this.clients[name]=[date];
        this.clients[status]?
        

    },
};





server.listen(3000);
module.exports = { model, server };