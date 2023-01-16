const butInstall = document.getElementById('buttonInstall');


window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault();

    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
  });


butInstall.addEventListener('click', async () => { 

installPrompt.prompt();
    window.deferredPrompt = null;
});



window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
  });
