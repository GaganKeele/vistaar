const courses = [
    { title: 'CODE DEBUGGER', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'QUIZ QUEST', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'SLIDESCAPE', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'REEL MAKING', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'KALA NIRVANA', time: '10:00am', venue: 'Vishweshwaryya hall', coordinator: 'Vilas D' },
    { title: 'MIND MAZE', time: '10:00am', venue: '5AI', coordinator: 'Vilas D' },
    { title: 'KNOWLEDGE KNOCKOUT', time: '10:00am', venue: '5AI', coordinator: 'Vilas D' },
    { title: 'BANG JAM', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'ARTELLIGENCE', time: '10:00am', venue: '109b lab', coordinator: 'Vilas D' },
    { title: 'TREASURE HUNT', time: '10:00am', venue: 'VCET campus', coordinator: 'Vilas D' },
    { title: 'BUILD A BOT', time: '10:00am', venue: 'Homi J Baba hall', coordinator: 'Vilas D' },
    { title: 'SCITRI BATTLE', time: '10:00am', venue: 'VCET', coordinator: 'Vilas D' },
    { title: 'DUMB CHARADES', time: '10:00am', venue: 'Sri Rama Sabha Bhavana', coordinator: 'Vilas D' },
    { title: 'COLLAGE MAKING', time: '10:00am', venue: 'Gym equipment area', coordinator: 'Vilas D' },
    { title: 'MAD ADS', time: '10:00am', venue: 'Vishweshwarayya Hall', coordinator: 'Vilas D' }
];

// Generate course cards dynamically
const courseContainer = document.getElementById('course-cards');

courses.forEach(course => {
    const courseLink = document.createElement('a');
    const repoName = 'vistaar'; 
courseLink.href = `/${repoName}/${course.title.replace(/\s+/g, '_').toUpperCase()}.html`;

    // courseLink.href = `/${course.title.replace(/\s+/g, '_').toUpperCase()}.html`;
    // courseLink.classList.add('cards');

    const cardName = document.createElement('div');
    cardName.classList.add('card-name');

    cardName.innerHTML = `
        <h2>${course.title}</h2>
        <p>Time: ${course.time}</p>
        <p>Venue: ${course.venue}</p>
        <p>Coordinator: ${course.coordinator}</p>
    `;

    courseLink.appendChild(cardName);
    courseContainer.appendChild(courseLink);
});
