function FnFile() {
  const uploads = document.querySelectorAll('[data-upload]');

  const handleChange = async (event: Event, fileItem: HTMLElement, fileItemFilename: HTMLElement) => {
    const field = event.target as HTMLInputElement;

    if (!fileItem || !field.files || !field.files.length) {
      return;
    }

    const file = field.files?.[0];

    if (!file || !fileItemFilename) {
      fileItem.classList.remove('flex');
      fileItem.classList.add('hidden');

      return;
    }

    fileItem.classList.remove('hidden');
    fileItem.classList.add('flex');

    fileItemFilename.textContent = file.name;
  };

  const handleRemove = (input: HTMLInputElement, fileItem: HTMLElement) => {
    input.value = '';
    fileItem.classList.remove('flex');
    fileItem.classList.add('hidden');
  };

  uploads.forEach(field => {
    const input = field.querySelector('input[type="file"]') as HTMLInputElement;
    const file = document.querySelector(`[data-file="${input.name}"]`) as HTMLElement;
    const fileFilename = file.querySelector('[data-filename]') as HTMLElement;
    const fileRemove = file.querySelector('[data-file-remove]') as HTMLElement;

    if (input && file && fileFilename && fileRemove) {
      input.addEventListener('change', event => handleChange(event, file, fileFilename));
      fileRemove.addEventListener('click', () => handleRemove(input, file));
    }
  });
}

export default FnFile;