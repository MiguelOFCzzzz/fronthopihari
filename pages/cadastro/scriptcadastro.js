
document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Verificação de senha
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Preparar dados para envio
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        password: password,
        birthDate: document.getElementById('birthDate').value,
        phone: document.getElementById('phone').value
    };
    
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html';
        } else {
            alert(`Erro: ${data.message || 'Ocorreu um erro no cadastro'}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});
