const container = document.getElementById('gridContainer');
    const totalCells = 200;
    const defaultIndexes = [0, 1, 2, 20, 21, 22, 40, 41, 42, 60, 61, 80, 81, 100, 120];
    let itemCount = 3;

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.ondrop = drop;
      cell.ondragover = allowDrop;

      if (defaultIndexes.includes(i)) {
        const item = document.createElement('div');
        item.className = 'item default-item';
        item.draggable = true;
        item.id = 'item' + i;
        item.ondragstart = drag;

        // Assign unique icons & labels
        let icon = 'default.png';
        let label = 'App';

        switch (i) {
          case 0: icon = 'thispc.png'; label = 'This PC'; break;
          case 1: icon = 'git.png'; label = 'Git Bash'; break;
          case 2: icon = 'edge.png'; label = 'Edge'; break;
          case 20: icon = 'Access.png'; label = 'Access'; break;
          case 21: icon = 'mongo.png'; label = 'MongoDB'; break;
          case 22: icon = 'text.png'; label = 'Project ideas'; break;
          case 40: icon = 'reddit.png'; label = 'Reddit'; break;
          case 41: icon = 'steam.png'; label = 'Steam'; break;
          case 42: icon = 'chrome.png'; label = 'Chrome'; break;
          case 60: icon = 'Epic.png'; label = 'Epic Games'; break;
          case 61: icon = 'folder.png'; label = 'Assets'; break;
          case 80: icon = 'card-game.png'; label = 'Solitaire'; break;
          case 81: icon = 'musicplayer.png'; label = 'Music Player'; break;
          case 100: icon = 'minecraft.png'; label = 'Minecraft'; break;
          case 120: icon = 'port.png'; label = 'Portfolio'; break;
        }

        item.innerHTML = `
          <img src="assets/img/appicons/${icon}" alt="${label}" class="icon-img" />
          <div class="item-label">${label}</div>
        `;
        cell.appendChild(item);
      }

      container.appendChild(cell);
    }

    let draggedItem = null;

    function drag(event) {
      draggedItem = event.target;
    }

    function allowDrop(event) {
      event.preventDefault();
    }

    function drop(event) {
      event.preventDefault();
      const targetCell = event.currentTarget;
      const targetItem = targetCell.querySelector('.item');

      if (!targetItem && draggedItem) {
        targetCell.appendChild(draggedItem);
      } else if (
        draggedItem &&
        targetItem !== draggedItem &&
        !targetItem.classList.contains('default-item')
      ) {
        const sourceCell = draggedItem.parentElement;
        targetCell.appendChild(draggedItem);
        sourceCell.appendChild(targetItem);
      }
    }

    function addNewItem() {
      const allCells = document.querySelectorAll('.grid-cell');
      for (const cell of allCells) {
        if (!cell.querySelector('.item')) {
          itemCount++;
          const newItem = document.createElement('div');
          newItem.className = 'item';
          newItem.draggable = true;
          newItem.id = 'item' + itemCount;
          newItem.ondragstart = drag;

          newItem.innerHTML = `
            <img src="assets/img/appicons/default.png" alt="New App" class="icon-img" />
            <div class="item-label">Text ${itemCount}</div>
          `;
          cell.appendChild(newItem);
          break;
        }
      }
    }