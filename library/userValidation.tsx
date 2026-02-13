export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

export const validators = {
  isValidText: (text: string): boolean => {
    if (!text.trim()) return false;
    // Only allow letters, spaces, hyphens, and apostrophes
    return /^[a-zA-Z\s\-']+$/.test(text);
  },

  validateName: (name: string): string => {
    if (!name.trim()) {
      throw new ValidationError("Please enter your name");
    }
    if (!validators.isValidText(name)) {
      throw new ValidationError(
        "Please enter a valid name without numbers or special characters",
      );
    }
    return name.trim();
  },

  validateCity: (city: string): string => {
    if (!city.trim()) {
      throw new ValidationError("Please enter your city");
    }
    if (!validators.isValidText(city)) {
      throw new ValidationError(
        "Please enter a valid city without numbers or special characters",
      );
    }
    return city.trim();
  },
};
