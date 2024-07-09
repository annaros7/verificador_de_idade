function verificar()
{
    var data = new Date()
    var ano = data.getFullYear() // PEGA O ANO ATUAL, EM 4 DÍGITOS
    var fAno = document.getElementById('txtano') //FORMULÁRIO ANO | querySelector NÃO funciona
    var res = document.querySelector('div#res')

    //SE O ANO ESCRITO FOR = 0 OU SEJA SE NÃO FOR ESCRITO 
    //OU SE O ANO ESCRITO FOR MAIOR QUE O ANO ATUAL == ERRO!
    if (fAno.value.length == 0 || Number(fAno.value) > ano) 
        {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        }else
        {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fAno.value) // valor atual (ano) - o valor do fAno
            var genero = ''
            var img = document.createElement('img')  
            //essa var vai criar uma tag img diretamente sem necessidade de criar no HTML
            img.setAttribute('id', 'foto') 
            //acima, foi criada uma tag dinamicamente, no JS, uma tag chamada 'foto'
            if (fsex[0].checked) // se o valor marcado (fsex) for 0 == fem se for 1 == masc
                {
                    genero = 'Mulher'
                    if (idade >= 0 && idade <10)
                        {
                            //criança
                            img.setAttribute('src', 'img/menina.png')
                        } else if (idade <21)
                            {
                                //jovem
                                img.setAttribute('src', 'img/mulher jovem.png')
                            } else if (idade < 50)
                                {
                                    //adulta
                                    img.setAttribute('src', 'img/mulher adulta.png')
                                } else
                                    {
                                        //idosa
                                        img.setAttribute('src', 'img/mulher idosa.png')
                                    }
                } else if (fsex[1].checked)
                {
                    genero = 'Homem'
                    if (idade >= 0 && idade <10)
                        {
                            //criança
                            img.setAttribute('src', 'img/menino.png')
                        } else if (idade <21)
                            {
                                //jovem
                                img.setAttribute('src', 'img/homem jovem.png')
                            } else if (idade < 50)
                                {
                                    //adulto
                                    img.setAttribute('src', 'img/homem adulto.png')
                                } else
                                    {
                                        //idoso
                                        img.setAttribute('src', 'img/homem idoso.png')
                                    }
                }
                res.innerHTML = 'Detectamos '+genero+' com '+idade+' anos.'
                res.appendChild(img)
                //appendChild adiciona um elemento (img)
        }
}

