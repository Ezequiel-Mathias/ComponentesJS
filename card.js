const PesquisarSuperHeroisimg = async (caixadepesquisa) =>{
    const url = `https://api-senai.herokuapp.com/alunos/${caixadepesquisa}`

    const resposta = await fetch(url)

    const data = await resposta.json()

    console.log(data)
    
    return data
     
}


console.log(PesquisarSuperHeroisimg(3))









class card extends HTMLElement{
    constructor(){
        super();
        this.build()
    }
    build () {
       const shadow = this.attachShadow({mode: 'open'})
       shadow.appendChild(this.styles())
       shadow.appendChild(this.createCard())
    }
    styles(){
        const style = document.createElement('style')
        style.textContent= `
        .card{
            width: ${this.bglarguradivwidth()};
            height: ${this.bgalturadivheight()};
            background-color: ${this.bgcolor()};
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
         }
         
         .card-text{
             width: 50%;
             padding: 4px; 
             text-align: center;
             color: white;
             text-transform: uppercase;
             border-radius: 12px;
             box-shadow: 0 0 2px #000;
             cursor: pointer;
         }
         
         .card-image{
             
             width: 50%;
             height: 50%;
             border-radius: 50%;
             background-image: url(${this.bgimg()});
             background-size: cover;
             box-shadow: inset 0 0 8px #000;
         }
         
       
        
        `
        return style
    }
     createCard = ( {nome ,}) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
        <div class="card-text">${this.PesquisarSuperHeroisimg(2).nome}</div>
        <div class="card-image"></div>
        <div class="card-text">${this.bgturma()}</div>
       
        `
        return card
    }

    bgcolor() {
        const color = this.getAttribute('data-bgcolor') ?? '#de1223';

        return color
    }

    bgtext() {
        const text = this.getAttribute('data-bgtext') ?? 'Aluno';

        return text
    }
    bgimg() {
        const img = this.getAttribute('data-IMG') ?? './img/tonycountry.jpg';

        return img
    }
    bgturma() {
        const turma = this.getAttribute('data-bgturma') ?? 'DS2Taaaaaaaaaaaaaaa';

        return turma
    }
    bgalturadivheight() {
        const tamanhoheigth = this.getAttribute('data-bgheight') ?? '250px';

        return tamanhoheigth
    }
    bglarguradivwidth() {
        const tamanhowidth = this.getAttribute('data-bgwidth') ?? '250px';

        return tamanhowidth
    }
}

customElements.define('card-aluno', card)