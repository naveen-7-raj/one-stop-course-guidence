document.getElementById('careerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const marks = parseInt(document.getElementById('marks').value);
    const skills = document.getElementById('skills').value.toLowerCase().split(',');
    const interest = document.getElementById('interest').value;

    let recommendation = '';
    let roadmap = '';

    if (marks >= 75 && interest === 'tech') {
        recommendation = '💼 Software Developer or Data Scientist';
        roadmap = `1️⃣ Learn Python basics → 2️⃣ Build Projects → 3️⃣ Apply for internships`;
    } else if (marks >= 65 && interest === 'business') {
        recommendation = '📊 Business Analyst or Digital Marketer';
        roadmap = `1️⃣ Learn Excel → 2️⃣ Digital Marketing Course → 3️⃣ Build case study`;
    } else {
        recommendation = '🎨 Content Creator or Graphic Designer';
        roadmap = `1️⃣ Learn design tools → 2️⃣ Build portfolio → 3️⃣ Apply for internships`;
    }

    document.getElementById('aiBubble').innerText = `🌟 I suggest:`;
    document.getElementById('result').innerHTML = `
        <h3>${recommendation}</h3>
        <p><strong>Roadmap:</strong> ${roadmap}</p>
    `;
});

const ctx = document.getElementById('marketChart')?.getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Software Dev', 'Business Analyst', 'Creative Designer'],
            datasets: [{
                label: 'Job Market Demand (%)',
                data: [85, 70, 60],
                backgroundColor: ['purple', 'blue', 'green']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}
