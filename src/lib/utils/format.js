const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

export const toBn = (value) => String(value).replace(/\d/g, (d) => BN_DIGITS[d]);

export const toBnCount = (n) => toBn(n.toLocaleString("en-IN"));

export const mockDelay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));
