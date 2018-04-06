let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let products = JSON.parse(this.responseText);
        let produto = new Produto();
        produto.lista = products;
    }
};
xmlhttp.open("POST", "php/produtos.php", true);
xmlhttp.send();