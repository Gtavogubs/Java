function onClickMenu() {
    // A função é chamada quando o usuário clica no ícone do menu (por exemplo, um botão de menu responsivo)
    //
    document.getElementById("menu").classList.toggle("change");
    // Pega o elemento com o ID "menu" (geralmente o ícone de menu) e alterna a classe "change".
    // Isso faz com que o ícone mude de aparência (ex: de três linhas para um "X").
    //
    document.getElementById("nav").classList.toggle("change");
    // Pega o elemento com o ID "nav" (geralmente o menu de navegação) e alterna a classe "change".
    // Essa classe "change" é usada para mostrar ou esconder o menu de navegação.
    //
    document.getElementById("menu-bg").classList.toggle("change-bg");
    // Pega o elemento com o ID "menu-bg" (fundo do menu) e alterna a classe "change-bg".
    // Normalmente, isso adiciona um efeito visual, como escurecer o fundo ou aplicar uma animação.
    //
    }