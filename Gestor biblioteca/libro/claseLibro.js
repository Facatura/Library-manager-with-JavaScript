class Libro{
    
    constructor(isbn,titulo,autorAgregado,generoAgregado,paginas){
        this.isbn = isbn;
        this.titulo = titulo;
        this.autorAgregado = autorAgregado;
        this.generoAgregado = generoAgregado;
        this.paginas = paginas;
    }
    get(){return this.isbn}
    set(isbn){this.isbn = isbn}

    get(){return this.titulo}
    set(titulo){this.titulo = titulo}

    get(){return this.Agregado}
    set(Agregado){this.Agregado = Agregado}

    get(){return this.generoAgregado}
    set(generoAgregado){this.generoAgregado = generoAgregado}
    
    get(){return this.paginas}
    set(paginas){this.paginas = paginas}

}

//let libro1 = new Libro("","","","");

//la clase libro con sus get y set para almacenar los datos 














