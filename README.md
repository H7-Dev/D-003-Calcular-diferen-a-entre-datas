
> ### **❓ 01.00 [-g save]  Calcular em dias diferença entre datas.**
> #### **Descrição**
>
>     calcular a diferença em dias e exibir o resultado no span com o ID "output
>

>#### ***✍️Exemplo de código HTML***
> ``` HTML
>     <h1>Calcular a diferença em dias entre duas datas</h1>
>     <div class="inputs">
>         <input type="date" name="in_dtInicial" id="in_dtInicial" value="2023-02-03">
>         <input type="date" name="in_dtFinal" id="in_dtFinal" value="2023-02-28">
>         <button id="calcularButton" type="button">Calcular</button>
>         <span id="output">Saida: </span>
>     </div>
> ```
>
> ---
>#### ***✍️Exemplo de código scss***
> ``` scss
> h1 {
>     text-align: center;
>     font-size: 2em;
>     margin-top: 1em;
>   }
>
>   .inputs {
>     display: flex;
>     flex-direction: column;
>     align-items: center;
>     margin-top: 2em;
>
>     input[type="date"] {
>       padding: 0.5em;
>       font-size: 1.2em;
>       margin-bottom: 1em;
>       border: 1px solid lightgray;
>       border-radius: 5px;
>     }
>
>     #output {
>       font-size: 1.5em;
>       font-weight: bold;
>       margin-top: 1em;
>     }
>   }
>
> ```
>
> ---
>
>#### ***✍️Exemplo de código JS***
> ``` JS
> function calcularDiferencaDatas() {
>     var inicial = new Date(document.getElementById("in_dtInicial").value);
>     var final = new Date(document.getElementById("in_dtFinal").value);
>     var diff = final - inicial;
>     var diffInDays = diff / (1000 * 60 * 60 * 24);
>     document.getElementById("output").innerHTML = diffInDays + " dias";
>   }
>
>   document.getElementById("calcularButton").addEventListener("click", calcularDiferencaDatas);
>
> ```
>
