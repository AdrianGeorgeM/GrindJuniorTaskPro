const BASE_API_URL = 'https://jsonplaceholder.typicode.com/';

const inputField = document.querySelector('[id-input]');
const searchButton = document.querySelector('[search-button]');
const resultsContainer = document.querySelector('[results-container]');

const fetchAndDisplayUserData = async (userId) => {
	try {
		const response = await fetch(`${BASE_API_URL}users/${userId}`);
		if (!response.ok) throw new Error('User not found');

		const userData = await response.json();
		resultsContainer.innerHTML = `
      <div class="user-profile">
			<img src="https://i.pravatar.cc/300?u=${userData.id}" alt="User Image" class="user-image">
        <div class="user-info">
          <p class="name"><strong>${userData.name}</strong></p>
          <p class="email">${userData.email}</p>
          <p class="phone">${userData.phone}</p>
        </div>
      </div>
    `;
	} catch (error) {
		resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
		resultsContainer.style.display = 'block';
	}
};

// Event lisStener for thS search button
searchButton.addEventListener('click', () => {
	const userId = inputField.value.trim();
	if (userId) {
		fetchAndDisplayUserData(userId);
	} else {
		resultsContainer.innerHTML = '<p>Please enter a user ID.</p>';
		resultsContainer.style.display = 'block';
	}
});
