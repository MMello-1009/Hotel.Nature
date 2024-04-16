import React, { useState }  from "react";
import '../../CSS/programas.css';

function Programas() {
  return (
    <div className="programas">
       <img className ="programasimg" src ='../Imagens/Paisagens/albufeira-da-caniçada.jpg'/>
          <h1 className="texto-na-imagen">Usufrua dos nossos programas</h1>
          
      <br></br><br></br>
      
        <h1 className="programas-titulo">Canyoning</h1><br></br>
        <div className="imagens">
          <img className="primeira-imagem" src="../Imagens/Programas/canyoning_geres.jpg"></img>
          <img className="segunda-imagem" src="../Imagens/Programas/canyoning_geres_conho_3.jpg"></img>
          </div>
          
          <h3 className="sobre-atividade">Sobre esta atividade:</h3>
      <p className="texto">O canyoning é um desporto onde se pode encontrar uma relação de estreita harmonia entre
        a natureza, a aventura e o prazer das águas cristalinas. A atividade de canyoning consiste na descida de cursos
        de água com fortes declives, utilizando cordas e recorrendo a saltos para transpor obstáculos, proporcionando
        uma sensação de descoberta e aventura ímpar.</p>
      <p className="texto">- Guiado: Sim</p>
      <p className="texto">- Duração: 3h</p>
      <p className="texto">- Disponível: Maio a Setembro</p>
      <p className="texto">- NºPessoas: Mínimo 1 pessoa</p>
      <p className="texto">- Nível: Fácil</p>
      <p className="texto">- Idade Mínima: 12 anos</p>
      <p className="texto">- Preço: 50€ por pessoa</p>
      <p className="texto">- Material incluído: Fato e botas</p>
      <p className="subtitulos">Reservas através de:</p>
      <p className="texto">hotel@real.natura.pt ou Tlf: +351 253 682 396</p>


      <br></br><br></br>
      <h1 className="programas-titulo">Passeios de Jipe</h1><br></br>
      <div className="imagens">
      <img className="primeira-imagem" src="../Imagens/Programas/Jipe.jpg"></img>
      <img className="segunda-imagem" src="../Imagens/Programas/7lagoas_jipe.png"></img>
      </div>
      
      <h3 className="sobre-atividade">Sobre esta atividade:</h3>
      <p className="texto">O passeio de jipe é realizado por guias locais com conhecimento profundo da cultura e dos locais mais importantes a visitar no Parque Nacional da Peneda Gerês.
        Tipicamente existem 2 rotas, a rota dos miradouros e cascatas e a rota das Sete Lagoas. Embora sejam rotas que passam em diferentes locais, em ambas é possível visitar miradouros, cascatas e aldeias tradicionais, combinando estradas em terra batida e asfalto.</p>
      <p className="texto">- Guiado: Sim</p>
      <p className="texto">- Duração: 5h</p>
      <p className="texto">- Idade: Sem restrições de idade, porém recomenda-se que que traga cadeira de criança caso seja necessário</p>
      <p className="texto">- Disponível: Todo o ano</p>
      <p className="texto">- NºPessoas: Mínimo 2 Pessoas</p>
      <p className="texto">- Preço: 20€ por Pessoa</p>
      <p className="subtitulos">Reservas através de:</p>
      <p className="texto">hotel@real.natura.pt ou Tlf: +351 253 682 396</p>


      <br></br><br></br>
      <h1 className="programas-titulo">Passeio a cavalo</h1><br></br>
      <div className="imagens">
      <img className="primeira-imagem" src="../Imagens/Programas/Cavalo2.jpg"></img>
      <img className="segunda-imagem" src="../Imagens/Programas/Cavalo.jpg"></img>
      </div>
     
      <h3 className="sobre-atividade">Sobre esta atividade:</h3>
      <p className="texto">Realizam-se em regiões de montanha onde para além do passeio a cavalo, possibilita o acesso a paisagens únicas.
        Todo o passeio é acompanhado por um monitor guia, os cavalos são adequados para pessoas sem experiência, garantindo assim um passeio em segurança.</p>
      <p className="texto">- Duração: 1h</p>
      <p className="texto">- Idade mínima: 15 anos</p>
      <p className="texto">- Preço: 30€ por Pessoa</p>
      <p className="subtitulos">Reservas através de:</p>
      <p className="texto">hotel@real.natura.pt ou Tlf: +351 253 682 396</p>

      <br></br><br></br>
      <h1 className="programas-titulo">SPA</h1><br></br>
      <div className="imagens">
      <img className="primeira-imagem" src="../Imagens/Programas/SPA2.jpg"></img>
      <img className="segunda-imagem" src="../Imagens/Programas/SPA.jpeg"></img>
      </div>
      
      <p className="texto"> Deixe-se conduzir através de uma viagem retemperante, onde os aromas e sublimes sensações o conduzem a uma profunda harmonia com a Natureza.
        Este espaço conta com um “Circuito de Spa” composto por: Banho Turco com Aromaterapia, Sauna, Duche de Sensações (cromoterapia e balde de água) e Jacuzzi.</p>
      <p className="subtitulos">Horário de funcionamento:</p>
      <p className="texto">Segunda a Domingo: 10h00 - 21h00</p>
      <p className="subtitulos">Reservas através de:</p>
      <p className="texto">hotel@real.natura.pt ou Tlf: +351 253 682 396</p>
    </div>

  );
}
export default Programas;