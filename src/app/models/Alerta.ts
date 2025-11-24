import { Users } from "./Users"

export class Alerta{
    idAlerta:number=0
    mensajeAlerta:String=""
    tipoAlerta:String=""
    fechaAlerta:Date=new Date()
    horaAlerta: Date= new Date()
    vistoAlerta:boolean=false
    usuario:Users=new Users()
}