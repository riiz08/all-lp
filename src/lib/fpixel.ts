export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export const pageVIew = () => {
  window.fbq("track", "pageView");
};

export const event = (name: string, options = {}) => {
  window.fbq("track", name, options);
};
