 const dataAtatua = new Date ();
 let dataObjetivo = prompt (¨Data final ANO-MES_DIA Exemplo:2024-04-10¨);

 dataObjetivo = new Date (dataObjetivo+ ¨t23:59:59);
 let diasQueFaltam = math.floor ((dataObjetivo-dataAtual)/ 86400000);
  
 document.querySelector(¨#dias_restantes¨).textContent = diasQueFaltam;