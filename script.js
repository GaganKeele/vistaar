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
    courseLink.href = `/${course.title.replace(/\s+/g, '_').toUpperCase()}.html`;
    courseLink.classList.add('cards');

    const cardName = document.createElement('div');
    cardName.classList.add('card-name');

    const title = document.createElement('h2');
    title.textContent = course.title;

    const time = document.createElement('p');
    time.textContent = `Time: ${course.time}`;

    const venue = document.createElement('p');
    venue.textContent = `Venue: ${course.venue}`;

    const coordinator = document.createElement('p');
    coordinator.textContent = `Coordinator: ${course.coordinator}`;

    cardName.appendChild(title);
    cardName.appendChild(time);
    cardName.appendChild(venue);
    cardName.appendChild(coordinator);

    courseLink.appendChild(cardName);
    courseContainer.appendChild(courseLink);
  });

  // Adjust the --vh CSS variable on window resize
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
});

// Initialize the --vh CSS variable when the script runs
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
