    const user = [
        {
            name: "Brayan stiven munoz quiroz",
            age: "22 años",
            hobbies: [
                "Jugar futbol",
                "Salir a comer",
                "Trotar",
                "Aprender",
                "Programar",
            ],
            question: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, quis quas laborum consequuntur corrupti
                accusamus vel nihil iusto tempora quos, fugiat harum omnis. Eligendi molestiae minima inventore
                aspernatur
                illum quibusdam.`,
        },
        {
            name: "Eleazar Geneste",
            age: 34,
            hobbies: ["Programar", "Praticar con familia y amigos"],
            question:
                "Me gusta crear , imaginar, al aprender a programar es una forma de aterizar mis ideas.",
        },
        {
            name: "Francis Martinez",
            age: 32,
            hobbies: ["Teatro", "Programar", "Leer"],
            question: "Quiero tener un empleo que me permita hacer magia,",
        },
        {
            name: "Oscar Nicolas Stella",
            age: 56,
            hobbies: [
                "escuchar musica",
                "informatica",
                "caminar",
                "ver peliculas",
            ],
            question: "Por que siempre me han gustado las computadoras",
        },
    ];

    const userName = document.querySelector('#user-name');
    const userAge = document.querySelector("#user-age");
    const userHobbies = document.querySelector('#user-hobbies');
    const question = document.querySelector('#question')
    
    const card = document.querySelector(".card")
    const cards = document.querySelector(".cards")

    let usersCards = ''

    let currentUserHobbies = ''
    user.forEach(usr =>  {

        usr.hobbies.forEach(hb => {
            currentUserHobbies += `
                <li>${hb}</li>
            `
        });
        usersCards += `
        <div class="card">
            <div class="img-container">
                <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/avatar-facebook-2632445.jpg?itok=humq0Qgg" alt="avatar">
            </div>
            <div class="user-info">
                <p id="user-name"><span>Name</span>: ${usr.name}</p>
                <p id="user-age"><span>Age</span>: ${usr.age}</p>
                <ul id="user-hobbies"><span>Hobbies</span>: ${currentUserHobbies}</ul>
                <p id="question"><span>Info</span>: ${usr.question}</p>
            </div>
        </div>
        `
        currentUserHobbies = ''
    })

    cards.innerHTML = usersCards;