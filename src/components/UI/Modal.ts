import FnCardEffect from '@/components/Card/CardEffect'
import FnFauxGraph from '@/components/UI/FauxGraph';

function FnModal() {
  const modals = document.querySelectorAll('[data-js="modal"]');

  const isValidDialog = (element: HTMLDialogElement | null) =>
    Boolean(
      element &&
        element instanceof HTMLDialogElement &&
        element.nodeName === 'DIALOG',
    );

  const open = (_event: Event, dialog: HTMLDialogElement) => {
    dialog.showModal();
    dialog.classList.remove('opacity-0');
    dialog.classList.add('opacity-100');

    // This is a hack. We need to re-run this method for any effect cards inside a modal.
    // Because getBoundingClientRect() will return 0 if the element is hidden.
    FnCardEffect()
    FnFauxGraph()
  };

  const close = (_event: Event, dialog: HTMLDialogElement) => {
    dialog.classList.remove('opacity-100');
    dialog.classList.add('opacity-0');

    window.setTimeout(() => {
      dialog.close();
    }, 300);
  };

  if (modals?.length) {
    modals.forEach(modal => {
      const dialog = modal?.nextElementSibling as HTMLDialogElement;

      if (!isValidDialog(dialog)) {
        return;
      }

      const closeTrigger = dialog.querySelector('[data-js="modal-close"]');

      closeTrigger?.addEventListener('click', event => close(event, dialog));
      modal.addEventListener('click', event => open(event, dialog));
      dialog.addEventListener('close', event => close(event, dialog));
    });
  }
}

export default FnModal;