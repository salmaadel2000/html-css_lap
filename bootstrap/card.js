window.onload = function() {
    var students = [
        { img: "./Homer-Simpson-cartoon-538x1024.jpg", id: 1, name: "John" },
        { img: "./bartsimpson.jpg", id: 2, name: "Adam" }
      ];

      var cardContainer = document.getElementById("cardContainer");
      var cardTemplate = cardContainer.children[0];
      cardContainer.removeChild(cardTemplate);
      students.forEach(function(student) {
        var cardClone = cardTemplate.cloneNode(true);
        cardClone.querySelector(".card-img-top").src = student.img;
        cardClone.querySelector(".card-title").textContent = student.name;
        cardClone.querySelector(".card-text").textContent = "Student ID: " + student.id;

        cardContainer.appendChild(cardClone);
      });
    };