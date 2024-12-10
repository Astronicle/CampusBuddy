document.addEventListener('DOMContentLoaded', () => {
    const cameraButton = document.getElementById('camera-button');
    const cameraModal = document.getElementById('camera-modal');
    const closeCameraButton = document.getElementById('close-camera');
    const videoStream = document.getElementById('camera-stream');

    // Open the camera modal and start the video stream
    cameraButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoStream.srcObject = stream;
            cameraModal.style.display = 'flex';
        } catch (error) {
            alert('Unable to access camera. Please check your permissions.');
            console.error(error);
        }
    });

    // Close the camera modal and stop the video stream
    closeCameraButton.addEventListener('click', () => {
        const stream = videoStream.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
        videoStream.srcObject = null;
        cameraModal.style.display = 'none';
    });
});
