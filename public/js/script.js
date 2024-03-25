document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('form');
    let titleCheckbox = document.getElementById('titleCheck');
    let yearCheckbox = document.getElementById('yearCheck');
    let titleInput = document.getElementById('title');
    let yearInput = document.getElementById('year');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if (yearCheckbox.checked) {
            window.location.assign(`/search/${yearInput.value}`);
        } else {
            window.location.assign(`/search?title=${titleInput.value}`);
        }
    });

    titleCheckbox.addEventListener('click', function() {
        let titleChecked = titleCheckbox.checked;

        if (titleChecked) {
            titleInput.disabled = false;
            yearInput.disabled = true;
            yearCheckbox.checked = false;
            yearInput.value = "";
        } else {
            titleInput.value = "";
            titleInput.disabled = true;
        }
    });

    yearCheckbox.addEventListener('click', function() {
        let yearChecked = yearCheckbox.checked;

        if (yearChecked) {
            yearInput.disabled = false;
            titleInput.disabled = true;
            titleCheckbox.checked = false;
            titleInput.value = "";
        } else {
            yearInput.value = "";
            yearInput.disabled = true;
        }
    });
});
