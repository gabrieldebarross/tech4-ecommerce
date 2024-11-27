document.addEventListener('DOMContentLoaded', function() {
    const formlogin = document.getElementById("formlogin");
    const formcadastro = document.getElementById("formcadastro");

    formlogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputusuariologin = document.getElementById("usuariologin");
        const inputsenhalogin = document.getElementById("senhalogin");
        const buttonlogin = document.getElementsByClassName("buttonlogin");

        console.log("Evento prev. login");
        console.log(`Usuário: ${inputusuariologin.value} / Senha: ${inputsenhalogin.value}`);

        function trocaPage(){
            window.location.href = 'page.html';
        }
        trocaPage();
    });

    formcadastro.addEventListener('submit', function(e) {
        e.preventDefault();

        const inputusuariocadastro = document.getElementById("usuariocadastro");
        const inputsenhacadastro = document.getElementById("senhacadastro");

        console.log("Evento prev. cadastro");
        console.log(`Usuário: ${inputusuariocadastro.value} / Senha: ${inputsenhacadastro.value}`);

        function usuarioCadastrado(){
            formcadastro.reset();
            alert(`Usuário cadastrado com sucesso!`);
        }
        usuarioCadastrado();
    });
});
