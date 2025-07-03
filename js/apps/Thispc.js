const item0 = document.getElementById('item0');
        const thisPCWindow = document.getElementById('thispc-window');
        const closeBtn = thisPCWindow.querySelector('.close');
        const minimizeBtn = thisPCWindow.querySelector('.minimize');
        const maximizeBtn = thisPCWindow.querySelector('.maximize');
        const windowHeader = thisPCWindow.querySelector('.window-header');

        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        let isMaximized = false;

        item0.addEventListener('dblclick', () => {
            thisPCWindow.classList.add('active');
            centerWindow();
        });

         closeBtn.addEventListener('click', () => {
            thisPCWindow.classList.remove('active');
        });

        minimizeBtn.addEventListener('click', () => {
            thisPCWindow.style.display = 'none';
            setTimeout(() => {
                thisPCWindow.style.display = 'block';
            }, 100);
        });

        // Maximize/Restore window
        maximizeBtn.addEventListener('click', () => {
    if (isMaximized) {
        thisPCWindow.style.width = '800px';
        thisPCWindow.style.height = '600px';
        thisPCWindow.style.top = '50%';
        thisPCWindow.style.left = '50%';
        thisPCWindow.style.transform = 'translate(-50%, -50%)';
        thisPCWindow.classList.remove('maximized'); // Remove maximized class
        maximizeBtn.textContent = '□';
        isMaximized = false;
    } else {
        thisPCWindow.style.width = '100vw';
        thisPCWindow.style.height = '100vh';
        thisPCWindow.style.top = '0';
        thisPCWindow.style.left = '0';
        thisPCWindow.style.transform = 'none';
        thisPCWindow.classList.add('maximized'); // Add maximized class
        maximizeBtn.textContent = '◱';
        isMaximized = true;
    }
});

windowHeader.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('window-control')) return;
            
            isDragging = true;
            const rect = thisPCWindow.getBoundingClientRect();
            dragOffset.x = e.clientX - rect.left;
            dragOffset.y = e.clientY - rect.top;
            
            document.addEventListener('mousemove', handleDrag);
            document.addEventListener('mouseup', stopDrag);
        });

        function handleDrag(e) {
            if (!isDragging || isMaximized) return;
            
            const x = e.clientX - dragOffset.x;
            const y = e.clientY - dragOffset.y;
            
            thisPCWindow.style.left = x + 'px';
            thisPCWindow.style.top = y + 'px';
            thisPCWindow.style.transform = 'none';
        }

        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', handleDrag);
            document.removeEventListener('mouseup', stopDrag);
        }

        function centerWindow() {
            thisPCWindow.style.left = '50%';
            thisPCWindow.style.top = '50%';
            thisPCWindow.style.transform = 'translate(-50%, -50%)';
        }
