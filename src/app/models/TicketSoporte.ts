import { Users } from "./Users"

export class TicketSoporte{
    tipoSoporte:string=""
    asuntoSoporte:string=""
    descripcionSoporte:string=""
    estadoSoporte:string=""
    fechacreacionSoporte:Date=new Date()
    users:Users=new Users()
}