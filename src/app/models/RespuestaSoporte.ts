import { TicketSoporte } from "./TicketSoporte"

export class RespuestaSoporte{
    idRespuestaSoporte:number=0
    mensajeRespuestaSoporte:string=""
    fechacierreRespuestaSoporte:Date=new Date()
    ticketreporte:TicketSoporte=new TicketSoporte()
}