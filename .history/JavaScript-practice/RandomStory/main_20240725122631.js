    document.querySelector("html").style.backgroundColor = "red";
    // 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
    const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');
    
    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);
        return array[random];
        }
     
    // 2. RAW TEXT STRINGS
    const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighed 300 pounds, and it was a hot day.";
    
    const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const insertY = ["the soup kitchen", "Disneyland", "the White House"];
    const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    
    // 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
    randomize.addEventListener('click', result);
    
function result() {
    let randomStory = storyText;
    
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    randomStory = randomStory.replace(/:insertx:/g, xItem);
    randomStory = randomStory.replace(/:inserty:/g, yItem);
    randomStory = randomStory.replace(/:insertz:/g, zItem);
    
    if(customName.value !== '') {
        const name = customName.value;
        randomStory = randomStory.replace('Bob', name);
        }
    
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14);
        const temperature = Math.round((94 - 32) * 5 / 9);
        randomStory = randomStory.replace('300', weight);
        randomStory = randomStory.replace('94', temperature);
        }
    
    story.textContent = randomStory;
    story.style.visibility = 'visible';
    }      