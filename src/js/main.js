// JavaScript for Windows XP Style Portfolio

const windowsContainer = document.getElementById('windows-container');

function openWindow(contentId) {
    const existingWindow = document.querySelector(`.window[data-content="${contentId}"]`);
    if (existingWindow) {
        existingWindow.style.display = 'block';
        return;
    }

    const windowElement = document.createElement('div');
    windowElement.classList.add('window');
    windowElement.setAttribute('data-content', contentId);
    windowElement.style.display = 'block';

    const windowHeader = document.createElement('div');
    windowHeader.classList.add('window-header');
    const windowTitle = document.createElement('h3');
    windowTitle.textContent = contentId.replace('-', ' ').toUpperCase();
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'X';
    closeButton.onclick = () => {
        windowElement.style.display = 'none';
    };

    windowHeader.appendChild(windowTitle);
    windowHeader.appendChild(closeButton);

    const windowContent = document.createElement('div');
    windowContent.classList.add('window-content');

    if (contentId === 'about-me') {
        windowContent.innerHTML = `
            <h2>About Me</h2>
            <p>This is the about me section.</p>
        `;
    } else if (contentId === 'projects') {
        windowContent.innerHTML = `
            <h2>Projects</h2>
            <p>This is the projects section.</p>
        `;
    } else if (contentId === 'resume') {
        windowContent.innerHTML = `
            <h2>Resume</h2>
            <iframe src="src/assets/resume.pdf" width="100%" height="100%"></iframe>
        `;
    } else if (contentId === 'contact') {
        windowContent.innerHTML = `
            <h2>Contact</h2>
            <p>This is the contact section.</p>
        `;
    }

    windowElement.appendChild(windowHeader);
    windowElement.appendChild(windowContent);

    windowsContainer.appendChild(windowElement);

    // Make the window draggable
    makeDraggable(windowElement);
}

function makeDraggable(element) {
    const header = element.querySelector('.window-header');
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
    }

    function mouseUpHandler() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }
}

