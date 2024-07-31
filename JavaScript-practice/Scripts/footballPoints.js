document.getElementById('footballPoints').addEventListener('click', function() {
    function calculatePoints(wins, draws, losses) {
        return wins * 3 + draws;
    }

    const wins = parseInt(prompt("Enter number of wins:"), 10);
    const draws = parseInt(prompt("Enter number of draws:"), 10);
    const losses = parseInt(prompt("Enter number of losses:"), 10);
    document.getElementById('output15').textContent = 'Total points: ' + calculatePoints(wins, draws, losses);
});
