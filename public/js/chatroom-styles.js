const detail_button = document.getElementById('details');
const user_button = document.getElementById('users');;

detail_button.addEventListener('click', () =>{
    document.getElementById('details-tab').style.display = 'block';
    document.getElementById('user-tab').style.display = 'none';

    document.getElementById('details').style.border = '2px solid #DA8E68';
    document.getElementById('users').style.border = 'none';
});

user_button.addEventListener('click', () =>{
    document.getElementById('user-tab').style.display = 'block';
    document.getElementById('details-tab').style.display = 'none';

    document.getElementById('users').style.border = '2px solid #DA8E68';
    document.getElementById('details').style.border = 'none';
});
