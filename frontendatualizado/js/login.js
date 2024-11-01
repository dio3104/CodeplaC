function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    fetch("https://codeplac-c7hy.onrender.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            matricula: username, 
            password: password  
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error("Falha no login. Verifique suas credenciais.");
        }
    })
    .then(data => {
        // Armazene uma variável de login no localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirecione ou apenas atualize a página
        location.reload();  // Atualiza a página para aplicar as mudanças
    })
    .catch(error => {
        alert(error.message);
    });
}


document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    login(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const selected = document.querySelector(".select-selected");
    const items = document.querySelector(".select-items");
    
    selected.addEventListener("click", function() {
        items.classList.toggle("select-hide");
    });

    items.querySelectorAll("div").forEach(item => {
        item.addEventListener("click", function() {
            selected.textContent = this.textContent; // Altera o texto do selecionado
            selected.setAttribute("data-value", this.getAttribute("data-value")); // Salva o valor selecionado
            items.classList.add("select-hide"); // Fecha as opções

            toggleFormFields(); // Chama a função para mostrar/ocultar os campos
        });
    });

    document.addEventListener("click", function(event) {
        if (!selected.contains(event.target) && !items.contains(event.target)) {
            items.classList.add("select-hide"); // Fecha o dropdown se clicar fora
        }
    });
});
