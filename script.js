// let data = {
//     "projects": [
//         {
//             "name": "Weather App",
//             "description": "A simple app to display weather information.",
//             "githubLink": "https://github.com/username/weather-app",
//             "imageURL": "https://via.placeholder.com/300x200?text=Weather+App"
//         },
//         {
//             "name": "Task Manager",
//             "description": "Manage your daily tasks efficiently.",
//             "githubLink": "https://github.com/username/task-manager",
//             "imageURL": "https://via.placeholder.com/300x200?text=Task+Manager"
//         },
//         {
//             "name": "Portfolio Website",
//             "description": "A personal portfolio to showcase projects.",
//             "githubLink": "https://github.com/username/portfolio-website",
//             "imageURL": "https://via.placeholder.com/300x200?text=Portfolio+Website"
//         }
//     ]
// }




fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load JSON data');
        }
        return response.json();
    })
    .then(data => {
        let section1 = document.getElementById("section1");
        let div = document.createElement("div");
        section1.appendChild(div);
        div.className = "header";

        let h1 = document.createElement("h1");
        div.appendChild(h1);
        h1.textContent = data.nomCommercial;

        let h2 = document.createElement("h2");
        div.appendChild(h2);
        h2.textContent = data.texteAccroche;
        h2.className = "h2P";

        let buttonAction = document.createElement("button");
        div.appendChild(buttonAction);
        buttonAction.textContent = data.texteBouton;

        data.promessesClient.forEach(element => {
            let Paragraphe = document.createElement("p");
            Paragraphe.textContent = element;
            div.appendChild(Paragraphe);
            Paragraphe.className = "P1"
        });

        data.plats.forEach(plat => {
            let section2 = document.getElementById("section2");
            let div2 = document.createElement("div");
            section2.appendChild(div2);
            div2.className = "divIMG";

            let h2A = document.createElement("h2");
            div2.appendChild(h2A);
            h2A.textContent = plat.nom;

            let p2 = document.createElement("p");
            div2.appendChild(p2);
            p2.textContent = plat.desc;
            p2.className = "p-article";

            let image = document.createElement("img");
            div2.appendChild(image);
            image.src = plat["image-url"];

        });

        data.services.forEach(service => {
            let section3 = document.getElementById("section3");
            let div3 = document.createElement("div");
            section3.appendChild(div3);

            let h4 = document.createElement("h4");
            div3.appendChild(h4);
            h4.textContent = service.nom;
            h4.className = "h4P";

            let p3 = document.createElement("p");
            div3.appendChild(p3);
            p3.textContent = service.desc;
            p3.className = "p-service";
        });

        data.temoignages.forEach(témoignage => {
            let section4 = document.getElementById("section4");
            let div4 = document.createElement("div");
            section4.appendChild(div4);

            let h4A = document.createElement("h4");
            div4.appendChild(h4A);
            h4A.textContent = témoignage.prenom;
            h4A.className = "h4-témoignage";

            let p4 = document.createElement("p");
            div4.appendChild(p4);
            p4.textContent = témoignage.typeExperience;
            p4.classList = "p4-typeExp"

            let p5 = document.createElement("p");
            div4.appendChild(p5);
            p5.textContent = témoignage.commentaire;
            p5.className = "p5-commentaire";

            let p6 = document.createElement("p");
            div4.appendChild(p6);

            if (témoignage.note === 4) {
            p6.innerHTML = `${témoignage.note} 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>`
                
            } else {
                p6.innerHTML = `${témoignage.note} 
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>`
            }
        });

    })
    .catch(error => console.error('Error:', error));




