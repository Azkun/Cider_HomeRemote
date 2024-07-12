const api = `${window.location.origin}/api/`;
const play = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

play.addEventListener('click', function () {
    fetch(api + "isPlaying")
        .then(response => response.json())
        .then(data => {
            if (data.is_playing) {
                fetch(`${window.location.origin}/api/pause`)
                    .then(response => response.json())
                    .then(pauseData => console.log('Paused:', pauseData))
                    .catch(error => console.error('Error pausing:', error));
            } else {
                fetch(`${window.location.origin}/api/play`)
                    .then(response => response.json())
                    .then(playData => console.log('Playing:', playData))
                    .catch(error => console.error('Error playing:', error));
            }
        })
        .catch(error => console.error('Error:', error));
});

previous.addEventListener('click', function () {
    fetch(api + "previous")
        .then(response => response.json())
        .then(data => console.log('Previous track:', data))
        .catch(error => console.error('Error fetching previous track:', error));
});

next.addEventListener('click', function () {
    fetch(api + "next")
        .then(response => response.json())
        .then(data => console.log('Next track:', data))
        .catch(error => console.error('Error fetching next track:', error));
});


document.addEventListener('DOMContentLoaded', function () {
    const volumeSlider = document.getElementById('volumeSlider');
    const volumePercentage = document.getElementById('volumePercentage');

    volumeSlider.addEventListener('input', function () {
        volumePercentage.textContent = `${this.value}%`;
    });

    volumeSlider.addEventListener('change', function () {
        const volume = parseFloat(this.value) / 100; 
        fetch(`${window.location.origin}/api/audio/${volume}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => console.log('Set volume:', data))
            .catch(error => console.error('Error setting volume:', error));
    });
});

