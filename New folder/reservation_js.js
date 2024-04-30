document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const reservation = {
        name,
        email,
        date,
        time,
        guests
    };

    // Here you can send the reservation data to the server using AJAX or fetch

    // For now, let's just display a message
    const message = document.getElementById('message');
    message.textContent = 'Reservation successfully made!';
    setTimeout(() => {
        message.textContent = '';
    }, 3000);

    // Clear form fields
    document.getElementById('reservationForm').reset();
});
