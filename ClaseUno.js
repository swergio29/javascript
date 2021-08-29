    //     class pepito {
    //         constructor (Pan, Carne, Adicional){
    //             this.base  = Pan;
    //             this.carne    = Carne;
    //             this.Adicionales     = Adicional;
    //         }
    //         estructuraComanda(){
    //             return "Pan " + this.base + " Carne " + this.carne + " Adicionales " + this.Adicionales + "\n" ;
    //         }
    //     }

    //     let Grande = 50;
    //     let pequeño = 10;
    //     let Mediano = 30;
    //     let Obelisco = 80;
    //     let Pollo = 20;
    //     let Res = 20;
    //     let Cerdo = 20;
    //     let mixto = 35;

    //     function crearComanda(){
    //         let nuevoPan = prompt("¿Que pan te gustaria? \n pequeño, Mediano, Grande, Obelisco");
    //         let nuevoRelleno = prompt ("¿que tipo de carne te gustaria? \n Res, Pollo, Cerdo (puedes elegir mas de una)");
    //         let Adicionales = prompt ("¿Te gustaria algun acompañante o sin algun ingrediente?");
    //         return new pepito(nuevoPan,nuevoRelleno,Adicionales); 
    //     }

    //     let seleccionarOpcion = prompt("INGRESA 1 PARA CARGAR UNA NUEVA COMANDA \n PRESIONAR OTRA TECLA PARA SALIR"); 
    //     let listadoComanda     = [];
    //     let mensajeFinal = "Orden Creada \n";
        
    //     Array

    //     while (seleccionarOpcion === "1"){
    //         listadoComanda.push(crearComanda());
    //         seleccionarOpcion = prompt("INGRESA 1 PARA CARGAR UNA NUEVA COMANDA \n PRESIONAR OTRA TECLA PARA SALIR");
    //         alert(mensajeFinal.toUpperCase());
    //     }



    //     if (listadoComanda.length > 0){
    //         for (const pepito of listadoComanda){
    //             mensajeFinal += pepito.estructuraComanda();
    //         }
    //         console.log(mensajeFinal.toUpperCase());
    //     }

    // const elementos = [Grande , Mediano, pequeño];
    // const presupuesto = elementos.slice(Grande, Mediano, pequeño);
    // console.log(presupuesto)


