"use strict";
class Produto{
	constructor(codigo,nome,imagem,promocao,preco,desconto,codigoCompra){
		this.codigo = codigo;
		this.nome = nome;
		this.imagem = imagem;
		this.promocao = promocao;
		this.preco = preco;
		this.desconto = desconto;
        this.codigoCompra = codigoCompra;
        Object.freeze(this);
	}
	set lista(objJSON){
		var lista = document.getElementById("lista");
		for(let i in objJSON.products){
			let produto = new Produto(objJSON.products[i].codigo,
                                      objJSON.products[i].nome,
                                      objJSON.products[i].imagem,
                                      objJSON.products[i].promocao,
                                      objJSON.products[i].preco,
                                      objJSON.products[i].desconto,
                                      objJSON.products[i].codigoCompra);
			var old_price, price;

			if(produto.promocao == true){
				old_price = "<small>De R$ "+ produto.preco +" por </small>";
				price = "R$ "+ (produto.preco - produto.desconto) + " ";
			}else{
                old_price = "";
				price = "Por apenas R$ "+ produto.preco;
			}

            lista.innerHTML += `
                <div class="col s12 m6 l4">
                   <div class="card teal lighten-5 z-depth-1 hoverable">
                      <div class="card-image">
                         <div class="material-placeholder" style=""><img class="materialboxed initialized" src="${produto.imagem}"></div>
                         <span class="card-title">${produto.nome}</span>
                      </div>
                      <div class="card-content">
                         <p class="price">${old_price}${price}</p>
                      </div>
                      <form class="card-action" action="https://pagseguro.uol.com.br/checkout/v2/payment.html" method="post" onsubmit="PagSeguroLightbox(this); return false;">
                          <input type="image" src="img/botao-comprar.png" name="submit">
                          <input type="hidden" name="code" value="${produto.codigoCompra}">
                          <input type="hidden" name="iot" value="button" class="waves-effect waves-light">
                       </form>
                   </div>
                </div>
            `;
		}
	}
}