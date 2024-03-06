const fs = require('fs');

/* function escreverArquivoCallback(nomeArquivo, dados, callback) {
    console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`)
    fs.writeFile(nomeArquivo, dados, (error) => {
        if(error) {
            console.error(`Erro ao escrever dados no arquivo ${nomeArquivo}:`, error)
            callback(error);
        } else {
            console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
            callback(null);
        }
    })
}
*/

async function escreverArquivo(nomeArquivo, dados) {
    console.log(`Escrevendo dados no arquivo ${nomeArquivo}...`);
    await fs.promises.writeFile(nomeArquivo, dados);
    console.log(`Dados escritos no arquivo ${nomeArquivo} com sucesso.`);
  }

/* function lerArquivoCallback(nomeArquivo, callback) {
    console.log(`Lendo dados do arquivo: ${nomeArquivo}`)
    fs.readFile(nomeArquivo, 'utf-8', (error, data) => {
        if(error) {
            console.error(`Erro ao ler dados do arquivo ${nomeArquivo}`, error)
            callback(error, null)
        } else {
            console.log(`Dados lidos do arquivo ${nomeArquivo}`)
            callback(null, data)
        }
    })
}
*/

async function lerArquivo(nomeArquivo) {
    console.log(`Lendo dados do arquivo: ${nomeArquivo}`);
    const data = await fs.promises.readFile(nomeArquivo, 'utf-8');
    console.log(`Dados lidos do arquivo ${nomeArquivo}`);
    return data;
  }

/* function getPokemonDataWithCallbacks() {
    console.log("Aguardando retorno da Poke API")
    fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then((response) => response.json())
        .then((data) => {
            const pokemonInfo = {
                nome: data.name,
                tipos: data.types.map(type => type.type.name),
                peso: data.weight,
                altura: data.height
            }

            const pokemonData = JSON.stringify(pokemonInfo, null, 2)
            escreverArquivoCallback('pokemon.json', pokemonData, (error) => {
                if(error) {
                    console.error('Erro ao escrever dados do pokemon', error)

                } else {
                    console.log("Pokemon cadastrado")
                    lerArquivoCallback('dados.txt', (error, dadosArquivoLocal) => {
                        if(error) {
                            console.error('Erro ao ler arquivo dados.txt', error)
                        } else {
                            console.log(`conteudo do arquivo dados.txt`, dadosArquivoLocal)
                            lerArquivoCallback('pokemon.json', (error, dadosPokemonSalvo) => {
                                if(error) {
                                    console.error('Erro ao ler dados do pokemon', error)
            
                                } else {
                                    console.log("Conteudo do arquivo pokemon", dadosPokemonSalvo)
                                }
                            })
                        }
                    })
                }
            })

        }).catch((error) => {
            console.error("Erro ao obter dados do pokemon", error)
        })
}
*/

async function getPokemonData() {
    console.log("Aguardando retorno da Poke API");
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const data = await response.json();
  
    const pokemonInfo = {
      nome: data.name,
      tipos: data.types.map(type => type.type.name),
      peso: data.weight,
      altura: data.height
    };
  
    const pokemonData = JSON.stringify(pokemonInfo, null, 2);
    await escreverArquivo('pokemon.json', pokemonData);
  
    const dadosArquivoLocal = await lerArquivo('dados.txt');
    console.log(`conteudo do arquivo dados.txt`, dadosArquivoLocal);
  
    const dadosPokemonSalvo = await lerArquivo('pokemon.json');
    console.log("Conteudo do arquivo pokemon", dadosPokemonSalvo);
  }
  

// getPokemonDataWithCallbacks();

getPokemonData();
