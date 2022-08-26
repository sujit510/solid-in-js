export const activateAccordion = () => {
  const accordions = document.getElementsByClassName('title-row');
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function (this: HTMLDivElement) {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.parentElement!.classList.toggle('active');

      /* Toggle between hiding and showing the active panel */
      const panel = <HTMLElement>this.parentElement!.querySelector('.panel')!;
      if (!panel.style.maxHeight || panel.style.maxHeight === '0px') {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });
  }
};
