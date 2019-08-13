document.addEventListener('submit', (e) => {
    e.preventDefault();
});

function sendEmail() {
    let name = document.getElementsByName('name').item(0).value;
    let subject = document.getElementsByName('subject').item(0).value;
    let message = document.getElementsByName('message').item(0).value;
    console.log(name, subject, message)
    window.location.href = `e6lu@edu.uwaterloo.ca?subject=${subject}&body=${message}`;
}