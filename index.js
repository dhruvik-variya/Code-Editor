let iFrame = document.getElementById("output");
let allInput = document.querySelectorAll(".leftPart textarea");

let htmlCode = '', cssCode = '', jsCode = '';

allInput.forEach((ele, index) => {

    ele.addEventListener('keyup', (e) => {

        ele.addEventListener('copy', (e) => {
            e.preventDefault();
            alert('Copy is disabled!');
        });

        ele.addEventListener('cut', (e) => {
            e.preventDefault();
            alert('Cut is disabled!');
        });

        ele.addEventListener('paste', (e) => {
            e.preventDefault();
            alert('Paste is disabled!');
        });

        if (index == 0) {
            htmlCode = ele.value;
        }
        if (index == 1) {
            cssCode = ele.value;
        }
        if (index == 2) {
            jsCode = ele.value;
        }

        iFrame.contentDocument.body.innerHTML = htmlCode;
        iFrame.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        iFrame.contentWindow.eval(jsCode);
    });
});

// Enable inspect
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Inspect Mode is enabled!");
});

// Open camera
function openCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.setAttribute('autoplay', 'true');
            videoElement.setAttribute('width', '320');
            videoElement.setAttribute('height', '240');

            videoElement.style.position = 'fixed';
            videoElement.style.top = '10px';
            videoElement.style.right = '10px';
            videoElement.style.border = '2px solid #61dafb';
            videoElement.style.zIndex = '9999';

            document.body.appendChild(videoElement);
        })
        .catch(function (error) {
            alert("Error accessing camera: " + error.message);
        });
}

openCamera();
