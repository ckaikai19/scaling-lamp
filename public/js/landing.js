const login = queryselector('#login');
const signup = queryselector('#signup');

login.addEventListener('click', () => {
    document.location.replace('/login')
})

signup.addEventListener('click', () => {
    document.location.replace('/signup')
})
