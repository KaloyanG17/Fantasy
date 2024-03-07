// Function to handle click events on players
function handlePlayerClick(playerName) {
    window.location.href = "player.php?player=" + encodeURIComponent(playerName);
}

// Add click event listeners to each player
document.addEventListener("DOMContentLoaded", function() {
    var players = document.querySelectorAll(".player");
    players.forEach(function(player) {
        player.addEventListener("click", function() {
            var playerName = this.querySelector(".player__name").textContent;
            handlePlayerClick(playerName);
        });
    });
});
