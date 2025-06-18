function highlight() {
    // Select all <strong> elements
    const strongTags = document.querySelectorAll('strong');
    
    // Loop through and change color to green
    strongTags.forEach(tag => {
        tag.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    const strongTags = document.querySelectorAll('strong');

    // Loop through and change color back to black
    strongTags.forEach(tag => {
        tag.style.color = 'rgb(0, 0, 0)';
    });
}
