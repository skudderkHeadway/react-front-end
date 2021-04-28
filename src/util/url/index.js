export const isValidUrl = (value) => {
  try {
    new URL(value);
  } catch {
    return false;
  }

  return true;
};

export const isValidSlug = (value) => {
  return /^[a-z0-9]+$/i.test(value);
};
