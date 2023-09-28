
// Froyo store managers want a customer survey to gather the following information
// First name, last name, email, phone, zip code, favorite flavors, cup size, favorite store, first visit
// create an object with the above keys using customer supplied information

const customer = {
    firstName: "Jake",
    lastName: "Smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
};

// Need to fix mistakes customer made filling out the survey
// Using given data correct the survey using bracket notation

customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = "3195551234";
customer['zipCode'] = "63132";
customer['favoriteFlavors'] = ["coffee", "strawberry", "matcha"];

console.log(customer);

// Delete the given data out of the customer object

delete customer['zipCode'];
delete customer['favoriteStore'];

console.log(customer);

// Add the following items into the customer object using dot notation

// customer['toppings'] = ["chocolate sprinkles", "wafer straws"];
// customer['futureFlavor'] = ["mango"];
// customer['todaysPurchaseCost'] = 5.32;

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavor = ["mango"];
customer.todaysPurchaseCost = 5.32;

console.log(customer);

// Check the survey once more.  Using array, print to the console only the keys

const myKeys = Object.keys(customer);

console.log(myKeys);
