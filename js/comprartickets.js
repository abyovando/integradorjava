function calcular()
{
    
    valor1=document.getElementById("cantidad").value;

    var select =document.getElementById('tipodescuento');
    var valorSel=select.options[select.selectedIndex].value;

    result=0;   

    switch(valorSel=parseInt(valorSel))
    {
        case 1:
            result=parseInt(valor1)*200;
            break;
        case 2:
            result=valor1*(200-((200*80)/100));
            break;
        case 3:
            result=valor1*(200-((200*50)/100));
            break;
        case 4:
            result=valor1*(200-((200*15)/100));
            break;
    }

    document.getElementById("total").value=result;
}

function reset()
{
    
}


