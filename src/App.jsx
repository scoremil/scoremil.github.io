// import logo from './logo.svg';
import './Style/home.css';

import logo from "./Pictures/logo.jpeg"

import bkg from "./Pictures/bk-99desconto.jpg"
import secureImg from "./Pictures/sslimg.png"
import passo1 from "./Pictures/passo1.png"
import passo2 from "./Pictures/passo2.png"
import passo3 from "./Pictures/passo3.png"

import bnf1 from "./Pictures/bnf1.png"
import bnf2 from "./Pictures/bnf2.png"
import bnf3 from "./Pictures/bnf3.png"

import libra from "./Pictures/libra.png"

import perfil from "./Pictures/identifica.png"

let cpf = []

function conc(Event) {

  Event.preventDefault()

  if (document.getElementById('cpf').value.length < 11 ) {

    alert('Digite Seu Cpf ou Cnpj ')

  }else if (document.getElementById('cpf').value.length > 14) {

    alert('Maximo 14 Caracteres')

  } else {

    let cpfCnpj = document.getElementById('cpf')
    let href = "https://wa.me/5511941259048?text=Desejo+Consultar+Minhas+Ofertas+Cpf/Cnpj=+"

    cpf.push(href + cpfCnpj.value)
    window.location.href = cpf

  }
}

function App() {


  return (
    <>
      <header class="site-header">
        <div class="site-identity">
          <img src={logo} alt="logo" style={{ width: "150px", borderRadius: "20px" }} />
        </div>
      </header>


      <div className="App">
        <img src={bkg} alt="bkground" width="100%" height="100%" />
        {/* <h1>Oportunidade Do Ano Para Colocar As Contas Em Dia</h1> */}
        <h1>Você sabia que é possivel Limpar seu Nome, seu CPF ou CNPJ em menos de 25 dias 100% ATRAVÉS DE MEIOS LEGAIS e ter sua vida de volta sem restrições para você renegociar suas dívidas em paz?
        </h1>
        <section>
          <h2>Consulte grátis ofertas para você ou sua empresa</h2>
          <form method="submit">

            <input style={{ height: "30px" }} id="cpf" type="text" name="CPF/CNPJ" placeholder="Digite Seu CPF ou CNPJ" required />
            <button id="button" type="submit" onClick={conc}> Consultar Gratis</button>
            <img id="secureImg" src={secureImg} alt="seguranca garantida" width="200px" />
          </form>

        </section>
      </div>

      <div className="Main" id="Main">
        <h1>Mais de 5 milhões de brasileiros já fizeram um acordo com a gente</h1>
        <h4>Negocie com mais de 30 empresas parceiras.</h4>
        <h4>Atendimento On-line para todo o Brasil.</h4>
        <h1>Como Funciona?</h1>
        <div className="passos">
          <img id="secureImg" src={passo1} alt="seguranca garantida" />
          <img id="secureImg" src={passo2} alt="seguranca garantida" />
          <img id="secureImg" src={passo3} alt="seguranca garantida" />
        </div>
      </div>

      <div className="Beneficios">
        <h1 style={{ color: "black", margin: "25px" }}>Nossos Benefícios</h1>

        <div className="bnfImgs">

          <div >
            <img src={bnf1} alt="bnf1" id="Bnf1" />
            <label htmlFor="Bnf1">Você pode realizar um acordo em menos de 5 minutos
            </label>
          </div>
          <div>
            <img src={bnf2} alt="bnf2" id="Bnf2" />
            <label htmlFor="Bnf2">Acesse suas informações e seus boletos sempre que precisar
            </label>
          </div>
          <div>
            <img src={bnf3} alt="bnf3" id="Bnf3" />
            <label htmlFor="Bnf3">Após realizar todo o processo, você ainda aumenta seu Score
            </label>
          </div>

        </div>
      </div>

      <div className='perfil' style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
      }}>
        <h1 style={{
          padding: "5px",
          color: "black",
          margin: "10px",
          background: "#d5d0d0"
        }} >Se você se identifica com alguma das opçoes abaixo, nós vamos te ajudar!
        </h1>
        <img style={{
          width: "80%",
          margin: "30px",
        }} src={perfil} alt="maos no rosto" />


        <ol id='Ol' style={{ alignSelf: "flex-start", }}>
          <label style={{ margin: "20px" }} htmlFor="Ol">Se você não consegue:
          </label>
          <li>Financiamento da sua Casa Própria

          </li>
          <li>Financiar seu Carro

          </li>
          <li>Fazer um Crediário

          </li>
          <li>Abrir uma Conta Bancária

          </li>
          <li>Cartões de Crédito

          </li>
          <li>Financiamento do FIES

          </li>
          <li>Está sem Poder de Compra

          </li>
          <li>Anda Pedindo o Cartão de Crédito Emprestado

          </li>
        </ol>

      </div>


      <div className="Leis">
        <h1 style={{ color: "black", margin: "25px" }}>Leis Complementares</h1>

        <div className="leisImgs">

          <div >
            <img src={libra} alt="Libra" id="LogoJustica" />
            <label htmlFor="LogoJustica">Lei nº 4.595, de 31 de Dezembro de 1964, (Dispõe sobre a política e as instituições monetárias, bancárias, creditícias, cria o conselho monetário nacional e dá outras providências).
            </label>
          </div>
          <div>
            <img src={libra} alt="Libra" id="LogoJustica" />
            <label htmlFor="LogoJustica">Lei Complementar nº 105, de 10 de Janeiro de 2001. (Dispõe sobre o sigilo das operações de instituições financeiras e dá outras providências), saber: Art. 1 – As instituições financeiras conservarão sigilo em suas operações ativas e passivas e serviços prestados.
            </label>
          </div>
          <div>
            <img src={libra} alt="Libra" id="LogoJustica" />
            <label htmlFor="LogoJustica">Constituição Federal do Brasil de 1988, Art. 5º: São invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito à indenização pelo dano material ou moral decorrente de sua violação.
            </label>
          </div>

        </div>
      </div>

      <div className="footer">
        <img style={{ width: "200px", alignSelf: "center" }} src={logo} alt="logo" />
        <p style={{ textAlign: "center" }}>Todos Os Direitos Reservados</p>
      </div>


    </>

  );
}

export default App;
