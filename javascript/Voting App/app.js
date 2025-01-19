// Array to store the destinations and their vote counts
let destinations = [];

// Function to add a name to the list
function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name === '') return;

    // Check if the name already exists in the array
    const existing = destinations.find(destination => destination.name === name);
    if (existing) {
        existing.votes += 1; // Increment vote count if it already exists
    } else {
        // Add new destination with 1 vote
        destinations.push({
            name: name,
            votes: 0
        });
    }

    // Clear the input field
    nameInput.value = '';

    // Update the displayed list
    displayDestinations();
}

// Function to display the destinations and their votes
function displayDestinations() {
    const candidatesDiv = document.getElementById('candidates');
    candidatesDiv.innerHTML = '';

    destinations.forEach(destination => {
        const candidateDiv = document.createElement('div');
        candidateDiv.className = 'candidate';
        candidateDiv.innerHTML = `
            <span>${destination.name}: ${destination.votes} votes</span>
            <button onclick="voteFor('${destination.name}')">Vote</button>
        `;
        candidatesDiv.appendChild(candidateDiv);
    });
}

// Function to vote for a specific destination
function voteFor(name) {
    const destination = destinations.find(dest => dest.name === name);
    if (destination) {
        destination.votes += 1; // Increment vote count
        displayDestinations(); // Update the displayed list
    }
}