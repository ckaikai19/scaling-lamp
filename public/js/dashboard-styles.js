const create_button = document.getElementById('create-button');
const create_box = document.getElementById('create-box');
const exit_button = document.getElementById('exit-button');
const github_button = document.getElementById('github-button');
const other_button = document.getElementById('other-button');


github_button.addEventListener('click', ()=>{
    github_button.style.border = '3px solid #DA8E68';
    other_button.style.border = 'none';

})


other_button.addEventListener('click', ()=>{
    other_button.style.border = '3px solid #DA8E68';
    github_button.style.border = 'none';
    
})


document.getElementById('github-subject-button').addEventListener('click', ()=>{
    document.getElementById('github-subject-button').style.border = '3px solid #DA8E68';
    document.getElementById('other-subject-button').style.border = 'none';
});

document.getElementById('other-subject-button').addEventListener('click', ()=>{
    document.getElementById('other-subject-button').style.border = '3px solid #DA8E68';
    document.getElementById('github-subject-button').style.border = 'none';
})


create_button.addEventListener('click', ()=>{ create_box.style.display = 'flex';})
exit_button.addEventListener('click', ()=>{create_box.style.display = 'none';})