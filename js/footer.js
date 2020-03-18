var userNameStored = JSON.parse(localStorage.getItem('userName'));
var jokesArray = ['Eight bytes walk into a bar. The bartender asks, "Can I get you anything?” “Yeah,” replied the bytes. “Make us a double."', 'How many programmers does it take to change a light bulb? None – Its a hardware problem', 'The three most dangerous things in the world are a programmer with a soldering iron, a hardware engineer with a software patch, and a user with an idea.', 'I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.', 'A programmer’s wife asks: “Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.” The programmer returns home with 12 loaves of bread… “They had eggs.”', 'Why did the programmer quit his job? Because he didn’t get arrays.', 'In order to understand recursion, you must first understand recursion.', 'I’m not anti-social; I’m just not user friendly.', 'Why was the JavaScript developer sad? Because he didnt Node how to Express himself.'];




var footerContent = document.getElementById('footerContent');
var jokeRendered = document.createElement('p');
jokeRendered.textContent = 'Hey ' + userNameStored + ', ' + jokesArray[Math.floor(Math.random() * jokesArray.length)];
footerContent.appendChild(jokeRendered);
