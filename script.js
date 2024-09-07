document.getElementById('askButton').addEventListener('click', async () => {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('response');
    
    if (!question.trim()) {
        responseDiv.textContent = 'Please enter a question.';
        return;
    }

    responseDiv.textContent = 'Processing...';

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer SZ3zKmZEThiHPyS8KnTGxQ_tr3cekD0S9HqvhkV7cqT3BlbkFJJWYh5DteCWDGJD0cPttneqq7apjTwp1r6FV8PWUqAA`  // Replace YOUR_API_KEY with your actual API key
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: question,
                max_tokens: 150
            })
        });

        const data = await response.json();
        responseDiv.textContent = data.choices[0].text.trim();
    } catch (error) {
        responseDiv.textContent = 'An error occurred. Please try again.';
    }
});
