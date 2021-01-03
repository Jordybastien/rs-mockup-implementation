window.onload = () => {
  setTimeout(() => {
    document.querySelector('#errors-box').classList.add('hide-element');
    setTimeout(() => {
      document.querySelector('#errors-box').classList.add('erase-element');
    }, 1500);
  }, 3000);
};
