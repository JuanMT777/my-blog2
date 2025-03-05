document.addEventListener('DOMContentLoaded', function() {
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            // Mostrar datos
            document.getElementById('biografia').textContent = data.biografia;
            document.getElementById('name').textContent = data.nombre;
            document.getElementById('facebookLink').href = data.enlaces[0].url;
            document.getElementById('instagramUser').href = data.enlaces[1].url;
            document.getElementById('xUser').href = data.enlaces[2].url;
            document.getElementById('githubUser').href = data.enlaces[3].url;
            document.getElementById('linkedinUser').href = data.enlaces[4].url;
            document.getElementById('website').href = data.enlaces[5].url;
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});