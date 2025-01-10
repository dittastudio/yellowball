function FnContact() {
  const forms = document.querySelectorAll('[data-js="form-contact"]');

  forms.forEach(form => {
    const serviceCheckboxes = form.querySelectorAll(
      '[data-js-services] input[type="checkbox"]',
    ) as NodeListOf<HTMLInputElement>;

    const handleServiceChange = () => {
      const checked = [...serviceCheckboxes].filter(
        (checkbox: HTMLInputElement) => checkbox.checked,
      );
      const selectedServices = [...checked].map(checkbox => checkbox.value);
      const selectedSections = selectedServices.length
        ? [...selectedServices, 'any']
        : [];
      const sections = form.querySelectorAll('[data-js-service]');

      sections.forEach(section => {
        section.classList.remove('flex');
        section.classList.add('hidden');
      });

      selectedSections.forEach(service => {
        const wrappers = form.querySelectorAll(
          `[data-js-service="${service}"]`,
        );

        if (wrappers?.length) {
          wrappers.forEach(wrapper => {
            wrapper.classList.remove('hidden');
            wrapper.classList.add('flex');
          });
        }
      });
    };

    serviceCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleServiceChange);
    });
  });
}

FnContact();