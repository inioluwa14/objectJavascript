// Question 1
function InstagramPost(author, content, image, views, likes){
    this.author = author;
    this.content = content;
    this.image = new Image();
    this.image.src = image;
    this.views = views;
    this.likes = likes;
}

// Question 2
const firstPost = new InstagramPost("Tiana", "Jesus Loves me, this I know", "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 100000, 10000);
console.log(firstPost);

const secondPost = new InstagramPost("Precious Okoye", "I will be travelling the my favorite place soon!!! Stay tuned for more updates.", "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", 10000, 10000);
console.log(secondPost);

// Question 3
// a
function createPerson(name, age, location){
    return{
        name: name,
        age:age,
        location:location
    }
}

const firstPerson = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
console.log(firstPerson);

// b
function createJambScores(engScore,govtScore,litScore,crkScore){
    return{
        engScore : engScore,
        govtScore : govtScore,
        litScore : litScore,
        crkScore : crkScore
    }
}

const musaJambScores = createJambScores(70,85,82,94);
console.log(musaJambScores);

firstPerson.JambScores = musaJambScores;
console.log(firstPerson);
// const newCreatePerson = Object.assign(firstPerson, musaJambScores);

// console.log(newCreatePerson);

// firstperson object has been updated too
// console.log(firstPerson)

// Question 4
// Different ways of cloning an object
const dummy = {name: "Tiana", age:15, Gender:"Female"};
// 1. using Object.assign() function e.g
const clone1 =  Object.assign({}, dummy)
console.log(clone1);
// Here the content in dummy will be copied to the empty object in clone1

// 2. using the spread operator
const clone2 = { ...dummy};
console.log(clone2);

// 3. using JSON parsing
const clone3 = JSON.parse(JSON.stringify(dummy))
console.log(clone3);

// Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}
let message = "";
for (let candidate in presidentialCandidates){
    message += presidentialCandidates[candidate] + "is the presidential candidate of " + candidate + ".\n"
}
console.log(message);