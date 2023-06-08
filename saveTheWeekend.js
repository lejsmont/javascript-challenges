import podcasts from "./podcasts.js";

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."

id: 1,
        title: "Scrimba Podcast", 
        duration: 50, 
        tags: ["education", "jobs", "technology"], 
        hosts: ["Alex Booker"], 
        rating: 10,
        genre: "education",
        paid: false

*/ 

function createDescriptionsFor(data){
   return data.map(podcast => {
        let hosts = podcast.hosts[0]
       
        if (podcast.hosts.length > 1) {
            for (let i = 1; i < podcast.hosts.length-1; i++) {
                hosts += ", " + podcast.hosts[i]
            }
            hosts += ", and " + podcast.hosts[podcast.hosts.length-1]
        }
        
       
        return {
           ...podcast,
           description: podcast.title + " is a " + podcast.duration + " minute " 
           + podcast.genre + " podcast hosted by " + hosts + "." 
       }
   })
}

console.log(createDescriptionsFor(podcasts))

