

  const hiddenicon = document.querySelector('.hiddenicons');
  const hiddeniconscreen = document.querySelector('.hiddeniconscreen');

  let open = false;
  let ignoreClick = false;

  hiddenicon.addEventListener('click', function () {
    hiddeniconscreen.style.bottom = '6.5%';
    open = true;
    ignoreClick = true;

    setTimeout(() => {
      ignoreClick = false;
    }, 50); // Prevent immediate document click after this
  });

  hiddeniconscreen.addEventListener('click', function () {
    ignoreClick = true;
    setTimeout(() => {
      ignoreClick = false;
    }, 50);
  });

  document.addEventListener('click', function () {
    if (open && !ignoreClick) {
      hiddeniconscreen.style.bottom = '-100%';
      open = false;
    }
  });


const acc = document.querySelector('.acc');
  const accs = document.querySelector('.accscreen');

  let op = false;
  let ig = false;

  acc.addEventListener('click', function () {
    accs.style.bottom = '6.5%';
    op = true;
    ig = true;

    setTimeout(() => {
      ig = false;
    }, 50); // Prevent immediate document click after this
  });

  accs.addEventListener('click', function () {
    ig = true;
    setTimeout(() => {
      ig = false;
    }, 50);
  });

  document.addEventListener('click', function () {
    if (op && !ig) {
      accs.style.bottom = '-100%';
      op = false;
    }
  });





   const Start = document.querySelector('.Start');
  const starts = document.querySelector('.startscreen');

  let ops = false;
  let igs = false;

  Start.addEventListener('click', function () {
    starts.style.bottom = '6.5%';
    ops  = true;
    igs = true;

    setTimeout(() => {
      igs = false;
    }, 50); // Prevent immediate document click after this
  });

  starts.addEventListener('click', function () {
    igs= true;
    setTimeout(() => {
      igs = false;
    }, 50);
  });

  document.addEventListener('click', function () {
    if (ops  && !igs) {
      starts.style.bottom = '-100%';
      ops  = false;
    }
  });
  
  
  const powb = document.querySelector('.powerbtn');
  const powc = document.querySelector('.powerscreen');

  let on = false;
  let ins = false;

  powb.addEventListener('click', function () {
    powc.style.bottom = '8%';
    on = true;
    igs= true;

    setTimeout(() => {
      igs = false;
    }, 50); // Prevent immediate document click after this
  });

  powc.addEventListener('click', function () {
    igs = true;
    setTimeout(() => {
      igs = false;
    }, 50);
  });

  document.addEventListener('click', function () {
    if (on && !igs) {
      powc.style.bottom = '-100%';
      on = false;
    }
  });


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const slider = document.querySelector('.volume-slider');
const tooltip = document.querySelector('.volume-tooltip');
const container1 = document.querySelector('.volume-container');

function updateTooltip() {
  const rect = slider.getBoundingClientRect();
  const width = slider.offsetWidth;
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  const value = parseFloat(slider.value);

  const percent = (value - min) / (max - min);
  const thumbX = percent * width;

  tooltip.style.left = `${thumbX}px`;
  tooltip.textContent = value;
}

// Show tooltip while dragging
slider.addEventListener('input', () => {
  container1.classList.add('active');
  updateTooltip();
});

// Hide tooltip shortly after releasing
slider.addEventListener('change', () => {
  setTimeout(() => container1.classList.remove('active'), 200);
});

// Optional: update when hovered
slider.addEventListener('mousemove', updateTooltip);




const brightnessSlider = document.querySelector('.brightness-slider');
const brightnessTooltip = document.querySelector('.brightness-tooltip');
const brightnessContainer = document.querySelector('.brightness-container');

function updateBrightnessTooltip() {
  const rect = brightnessSlider.getBoundingClientRect();
  const width = brightnessSlider.offsetWidth;
  const min = parseFloat(brightnessSlider.min);
  const max = parseFloat(brightnessSlider.max);
  const value = parseFloat(brightnessSlider.value);

  const percent = (value - min) / (max - min);
  const thumbX = percent * width;

  brightnessTooltip.style.left = `${thumbX}px`;
  brightnessTooltip.textContent = value;
}


brightnessSlider.addEventListener('input', () => {
  brightnessContainer.classList.add('active');
  updateBrightnessTooltip();
});


brightnessSlider.addEventListener('change', () => {
  setTimeout(() => brightnessContainer.classList.remove('active'), 200);
});


brightnessSlider.addEventListener('mousemove', updateBrightnessTooltip);




const menu = document.getElementById("menu");


document.addEventListener("contextmenu", function(e) {
  e.preventDefault(); // Disable default context menu
  menu.style.top = `${e.clientY}px`;
  menu.style.left = `${e.clientX}px`;
  menu.style.display = "block";
});


document.addEventListener("click", function(e) {
  if (!menu.contains(e.target)) {
    menu.style.display = "none";
  }
});


menu.addEventListener("click", function() {
  menu.style.display = "none";
});


function createTextFile() {
  alert("New text file created!");
}

