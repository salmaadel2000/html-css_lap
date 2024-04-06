window.onload = function() {
    var persons = [
        { name: 'salma', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet dolore praesentium error est. Quo molestias quae dignissimos odio, iure provident blanditiis animi natus, suscipit, delectus fugit. Et, cum fuga!' },
        { name: 'adel', des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero amet dolore praesentium error est. Quo molestias quae dignissimos odio, iure provident blanditiis animi natus, suscipit, delectus fugit. Et, cum fuga!' }
    ];
    var accordionContainer = document.getElementById("accordionFlushExample");
    persons.forEach(function(person, index) {
        var accordionItem = document.createElement("div");
        accordionItem.className = "accordion-item";
        var accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";
        accordionHeader.id = "flush-heading-" + index; 
        var button = document.createElement("button");
        button.className = "accordion-button collapsed";
        button.type = "button";
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#flush-collapse-" + index); 
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "flush-collapse-" + index);

        button.textContent = person.name;

        accordionHeader.appendChild(button);
        var accordionBody = document.createElement("div");
        accordionBody.className = "accordion-collapse collapse";
        accordionBody.id = "flush-collapse-" + index; 
        accordionBody.setAttribute("aria-labelledby", "flush-heading-" + index);
        accordionBody.setAttribute("data-bs-parent", "#accordionFlushExample");
        accordionBody.innerHTML = '<div class="accordion-body">' + person.des + '</div>';
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionBody);
        accordionContainer.appendChild(accordionItem);
    });
};

  



  