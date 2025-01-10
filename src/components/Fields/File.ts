function FnFile() {
  const fields = document.querySelectorAll('[data-js="file"]');

  const handleChange = async (event: Event, info: HTMLElement) => {
    const field = event.target as HTMLInputElement;

    if (!info || !field.files || !field.files.length) {
      return;
    }

    const file = field.files?.[0];

    if (!file) {
      return;
    }

    const fileSizeMb = Math.round(file.size / 1000 / 1000);
    const fileInfo = !fileSizeMb
      ? `${file.name}`
      : `${file.name} (${fileSizeMb} MB)`;

    info.textContent = fileInfo;
  };

  fields.forEach(field => {
    const input = field.querySelector('input[type="file"]') as HTMLInputElement;
    const info = field.querySelector('[data-js-file-info]') as HTMLElement;

    if (input && info) {
      input.addEventListener('change', event => handleChange(event, info));
    }
  });
}

FnFile();
