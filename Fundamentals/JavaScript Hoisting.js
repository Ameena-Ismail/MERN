1a. Assignment: 
console.log(hello);                                   
var hello = 'world';                                 

1b. Prediction: output: undefined
var hello;
console.log(hello); 
hello="world"; 


2a. Assignment:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

2b. Prediction: output: "magnet"
function test(){
    var needle="magnet";
    console.log(needle);     
}  
var needle;       
needle = "haystack";
test();                


3a. Assignment:
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();
console.log(brendan);

3b. Prediction:  output = "only okay", "only okay"
function print(){
    brendan = 'only okay';
    console.log(brendan);  
}
var brendan;
brendan = 'super cool';
print();                   
console.log(brendan);      


4a. Assignment: 
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

4b. Prediction: output: "chicken", "half-chicken"
var food;
food = "chicken";
console.log(food);
eat();
function eat(){ 
    var food;            
    food="half-chicken";
    console.log(food);      
    var food;
    food="gone"
};
      
  



5a. Assignment:
mean();
console.log(food);
var mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    var food;
    food = "fish";
    console.log(food);
}
console.log(food);

5b. Prediction: output: TypeError: mean is not a function
var mean;
mean(); 
console.log(food); 
mean = function(){
    var food;
    food="chicken";
    console.log(food); 
    food="fish";  
    console.log(food);  
}
console.log(food);    



6a. Assignment:
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

6b. Prediction: output: undefined, "rock", "r&b", "disco"
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre;
console.log(genre)
genre="disco";
rewind();
console.log(genre)


7a. Assignment:
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

7b. Prediction: output: "san jose", undefined, "seattle", "burbank", "san jose"
function learn() {
    var dojo;
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";       //JS allows this even thought it is NOT defined as a var in the global scope
console.log(dojo);
learn();
console.log(dojo);

8a. Assignment:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

8b. Prediction: output: TypeError: Assignment to const variable (have to assign const variable when declared)
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
    }

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
