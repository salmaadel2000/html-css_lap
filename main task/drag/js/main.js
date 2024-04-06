document.addEventListener('DOMContentLoaded', function() {
    const dragItems = document.querySelectorAll('.drag-item');
    const sec = document.querySelector('.sec');
    const frist = document.querySelector('.frist');

    dragItems.forEach(function(item) {
        item.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('', ''); 
        });

        item.addEventListener('dragend', function(event) {
            event.target.remove();
            checkFristChildCount(); 
        });
    });

    sec.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    sec.addEventListener('drop', function(event) {
        event.preventDefault();

        const dropTarget = event.target.closest('.sec');
        const droppedItem = document.createElement('img');
        droppedItem.src = event.dataTransfer.getData('text/plain');
        droppedItem.classList.add('drag-item'); 
        dropTarget.appendChild(droppedItem); 
        
        checkFristChildCount(); 
    });

    function checkFristChildCount() {
        if (frist.childElementCount === 0) {
            const message = document.createElement('p');
            message.textContent = 'There is no doll.';
            frist.appendChild(message);
            message.classList.add('msg');
        }
    }
    checkFristChildCount();
});


