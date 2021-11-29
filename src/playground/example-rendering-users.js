
//example of rendering a website with users

const user = {
    name: 'Larry',
    age: 64,
    location: 'Miami, FL, USA'
}
const username = 'Ilan Lieberman';
const userAge = 28;
const userLocation = 'Hong Kong SAR';

// We can use functions buy calling themas a JSX expression and we can put whatever we want including if statments
function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    } //else{
    //     return undefined; // the same if you dont have it. undefine is useful
    // }
    

}
    
const template2 = (
    <div>
        <h1>{user.name? user.name : 'Anonymous'}</h1> 
        {(user.age && user.age >=18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
); 
user.name? user.name : 'Anonymous' //-This is a ternary operator and it means: does user.name exist if so show user.name if not type 'Anonymous'.
// this typing undefined or null in JSX will be ignored 
// (user.age && user.age >=18) && <p>Age: {user.age}</p> - this means if user.age exists and that  user.age is >=18 then show this element <p>Age: {user.age}</p>
