import { z } from "zod";

type Fields = "name" | "email" | "telephone" | "about" | "agree";

function FnContact() {
  const forms = document.querySelectorAll('[data-js="form-contact"]') as NodeListOf<HTMLFormElement>;

  const serviceSections = (form: HTMLFormElement) => {
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
  }

  const validation = (form: HTMLFormElement) => {
    const formSchema = z.object({
      name: z.string().nonempty("Please enter your name"),
      email: z.string().nonempty("Please enter your email").email("Please enter a valid email address"),
      telephone: z.string().nonempty("Please enter your telephone number"),
      about: z.string().nonempty("Please tell us about your project"),
      agree: z.boolean().refine(val => val === true, {
        message: "Please agree to our privacy policy",
      })
    });

    const nameInput = form.querySelector("#name") as HTMLInputElement;
    const emailInput = form.querySelector("#email") as HTMLInputElement;
    const telephoneInput = form.querySelector("#telephone") as HTMLInputElement;
    const aboutInput = form.querySelector("#about") as HTMLTextAreaElement;
    const agreeInput = form.querySelector("#agree") as HTMLInputElement;

    if (!nameInput || !emailInput || !telephoneInput || !aboutInput || !agreeInput) {
      return;
    }

    const validateField = (field: Fields, value: string | boolean) => {
      // @ts-ignore
      const fieldSchema = formSchema.pick({ [field]: true });
      const result = fieldSchema.safeParse({ [field]: value });
      const errorField = form.querySelector(`[data-error="${field}"]`);

      if (!result.success && errorField) {
        const errorMessage = result.error.errors[0]?.message;
        const errorText = errorField.querySelector('p');

        if (errorMessage && errorText) {
          errorField.classList.remove("hidden");
          errorField.classList.add("flex");
          errorText.textContent = errorMessage;
        }
      } else if (result.success && errorField) {
        errorField.classList.add("hidden");
        errorField.classList.remove("flex");
      }
    };

    const validateAllFields = () => {
      validateField("name", nameInput.value.trim());
      validateField("email", emailInput.value.trim());
      validateField("telephone", telephoneInput.value.trim());
      validateField("about", aboutInput.value.trim());
      validateField("agree", agreeInput.checked);
    };

    nameInput.addEventListener("input", () => validateField("name", nameInput.value.trim()));
    emailInput.addEventListener("input", () => validateField("email", emailInput.value.trim()));
    telephoneInput.addEventListener("input", () => validateField("telephone", telephoneInput.value.trim()));
    aboutInput.addEventListener("input", () => validateField("about", aboutInput.value.trim()));
    agreeInput.addEventListener("change", () => validateField("agree", agreeInput.checked));

    form.addEventListener("submit", (event) => {
      validateAllFields();

      const errorFields = form.querySelectorAll('[data-error]:not(.hidden)');

      if (errorFields.length) {
        event.preventDefault();
      }
    });
  }

  forms.forEach(form => {
    serviceSections(form);
    validation(form);
  });
}

export default FnContact;