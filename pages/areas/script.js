document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    const token = String(localStorage.getItem('token').replaceAll('"', ''));
    console.log(area);
    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {    
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + token
        },
    });
    const data = await response.json();
    console.log(data.Brinquedos);

    for (var brinquedo of data.Brinquedos) {
        console.log(brinquedo);

       const grid = document.querySelector('.rides-grid');
       grid.innerHTML = grid.innerHTML +
        `
        <div class="ride-card">
            <div class="ride-image" style="background-image: url('/../../pages/dashboard/img/${brinquedo.image}')"></div>
            <div class="ride-info">
                <h3 class="ride-name">${brinquedo.name}</h3>
                <div class="ride-time"> ${brinquedo.waiting_time} min</div>
                <span class="ride-status status-open"> ${brinquedo.status}</span>
            </div>
        </div>
    `
    }
});
