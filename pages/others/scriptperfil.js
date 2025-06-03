document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('user')) || {};

 
    document.getElementById('login').value = userData.email || '';
    document.getElementById('nome').value = userData.firstName || '';
    document.getElementById('data_nascimento').value = userData.birthDate || '';
    document.getElementById('telefone').value = userData.phone || '';
    document.getElementById('celular').value = userData.mobile || '';
    document.getElementById('prestador').value = userData.provider || '';

   
    document.querySelector('.primary-button').addEventListener('click', function (event) {
        event.preventDefault();

        const updatedUserData = {
            email: document.getElementById('login').value,
            firstName: document.getElementById('nome').value,
            birthDate: document.getElementById('data_nascimento').value,
            phone: document.getElementById('telefone').value,
            mobile: document.getElementById('celular').value,
            provider: document.getElementById('prestador').value,
        };

      
        if (!updatedUserData.firstName || !updatedUserData.email) {
            alert('Por favor, preencha os campos obrigatórios.');
            return;
        }

       
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        alert('Informações atualizadas com sucesso!');
    });
});