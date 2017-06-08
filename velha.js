var result=0;
var result2=0;	
var vez = 0;
var jogadas =0;
var casasJogadas= [];
var teste= true;
var jogadasP1=[];
var jogadasP2=[];


function jogada(valor)
{
	var jogador1= "<img src='img/jogador1.jpg' width='120'>";
	var jogador2= "<img src='img/jogador2.jpg' width='150'>";
	var vitoria = [casa1,casa2,casa3];
	var vitoria1= [casa4,casa5,casa6];
	var vitoria2= [casa7,casa8,casa9];
	var vitoria3= [casa1,casa4,casa7];
	var vitoria4= [casa2,casa5,casa8];
	var vitoria5= [casa3,casa6,casa9];
	var vitoria6= [casa1,casa5,casa9];
	var vitoria7= [casa3,casa5,casa7];
	var vitoriasPossiveis= [vitoria,vitoria1,vitoria2,vitoria3,vitoria4,vitoria5,vitoria6,vitoria7];

	for(let i=0;i<=casasJogadas.length;i++)
	{
		if(casasJogadas[i]==valor)
		{
			teste=false;
			break;
		}
		else
		{
			teste=true;

		}
	}	

		if(teste==true)

		{
				if(casasJogadas.length<9)
				{
					if(vez==0)
						{
							document.getElementById(`${valor}`).innerHTML= jogador1;
							vez=1;
							jogadas +=1;
							casasJogadas.push(`${valor}`);
							jogadasP1.push(`${valor}`);
							
							for(let i=0;i<=7;i++)
							{

								vitoriasPossiveis[i].forEach(vitorias => {
								

								if(jogadasP1.includes(vitorias))
								{
									result += 1;
									
								}});
								
								if(result<3)
								{
									result=0;
								}
								if(result==3)
								{
									break;
								}
							}		

						}
							
					else
						{
							document.getElementById(`${valor}`).innerHTML = jogador2;
							vez = 0;
							jogadas +=1;
							casasJogadas.push(`${valor}`);
							jogadasP2.push(`${valor}`);	

							for(let i=0;i<=7;i++)
							{

								vitoriasPossiveis[i].forEach(vitorias => {
								

								if(jogadasP2.includes(vitorias))
								{
									result2 += 1;
									console.log(result2);
									
								}});
								
								if(result2<3)
								{
									result2=0;
								}
								if(result2==3)
								{
									break;
								}
							}
							

						}
								
				}
				
			if(casasJogadas.length==9 && result<3 &&result<3)
			{

				swal({title: "Velha",text: ":-(",timer: 2000,showConfirmButton: false});
			   
			}	
			
	 	}
	 	else
	 	{
	 		swal({title: "Essa casa ja foi jogada!",text: "tente outra ",timer: 1000,showConfirmButton: false});

	 	}

		if(result==3)
		{
			swal({title: "Jogador 1 Venceu!",text: "Parabéns",timer: 2000,showConfirmButton: false});
			casasJogadas.length=9;
			
		}
		else if (result2==3)
		 {
		 	swal({title: "Jogador 2 Venceu!",text: "Parabéns",timer: 2000,showConfirmButton: false});
		 	casasJogadas.length=9;
		 }
}
