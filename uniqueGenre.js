import mediaData from "./movies.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){

    const resultArr = []

    data.forEach(element => {
        element.tags.forEach(el => {
            if (!resultArr.includes(el)) {
                resultArr.push(el)
            }
        })
    })

    return resultArr
}

function getUniqueTags2(data) {
    const tags = data.map(el => el.tags).flat()

    const uniqueTags = {}

    return tags.filter(tag => {

        if (!uniqueTags[tag]){
            uniqueTags[tag] = true
            return true
        }
        return false
        
    })

}

console.log(getUniqueTags2(mediaData));