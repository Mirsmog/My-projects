const textArea = document.querySelectorAll('[data-autoresize]')


textArea.forEach(i => {
  let textAreaH = i.offsetHeight;

  i.addEventListener('input', e => {
    let $this = e.target

    $this.style.height = textAreaH + 'px'
    $this.style.height = $this.scrollHeight + 'px'
  })
});
