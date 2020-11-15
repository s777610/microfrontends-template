// give webpack ability to asynchronously load bootstrap js file
// so webpack has the opportunity in the broswer to know that
// before we run this code, we also have to fetch Faker library
import('./bootstrap');
