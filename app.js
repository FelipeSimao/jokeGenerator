
 const jokes = [
     
"int x=10; int y=10; return x+y; // Qual o nome do filme?<br> O Código dá Vinte",

"Por que enviar SPAM é algo justificável?<br> Porque os fins justificam os emails",

"Qual o endereço do site do cavalo?<br> www.cavalo pontocom pontocom pontocom",

"Por que o mouse é muito mimado?<br> Porque tudo o que ele quer, o mouse pad",

"Qual doença se pode pegar ao usar notebook?<br>  A LAPTOPspirose",

"O que uma impressora falou para a outra?<br> Essa folha aí no chão é sua, ou é impressão minha?",

"O que o Schwarzenegger disse quando instalaram o Windows XP pra ele?<br> Instala o Vista, baby",

"O que é um terapeuta?<br> 1.024 gigapeutas",    

"Para qual santo você reza quando esquece a senha? São Login. <br>  E quando precisa comprar um novo computador?<br> Santa Ifigênia",

"O dono do site esqueceu a própria senha, qual o nome do filme? <br>Esqueceram Admin",

"Quando você percebe que seu computador está velho?<br> Quando a placa-mãe já virou avó",

"Por que antigamente a Internet não subia de elevador? <br>Porque era Internet de-escada",

"Como se manda um Salve pra galera do computador?<br> CTRL+S",

"Como o Pai de Santo acessa a Internet?<br> Com Umbanda larga",

"Qual a diferença entre Hardware e Software?<br> O Hardware você chuta, o Software você xinga",

"Na frase -Fulano foi mal em todas as provas-, onde está o sujeito? <br>Na Internet",

"Por que hoje em dia não se encontra mais CD virgem? <br>Todos viraram CD de Programa",

"Qual é a gata que entra e já sai do chat? <br>A Hello, Quit",

"Por que os sites de emprego não informam nada? <br>Porque lá as informações são vagas Programadores",

"Quantos programadores são necessários para trocar uma lâmpada?<br> Nenhum, isso é problema de Hardware",

"Qual linguagem de programação o Han Solo detesta? <br> JabbaScript",

]

var id = 0

document.querySelector('.text-box').addEventListener('click',()=>{
    
    id = Math.floor(Math.random() * jokes.length)
    
    document.querySelector('p').innerHTML = jokes[id]
})

function copy(){
    textCopy = jokes[id].replaceAll('<br>','')
    navigator.clipboard.writeText(textCopy)
}