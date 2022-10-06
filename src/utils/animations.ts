export const headerAnimations = {
  initial: { opacity: 0, marginTop: -200 },
  animate: { opacity: 1, marginTop: 0 },
  transition: { delay: 0.1 },
};

export const modalAnimations = {
  initial: { opacity: 0, marginTop: -1200 },
  animate: { opacity: 1, marginTop: -800 },
  transition: { delay: 0.1, duration: 0.4 },
};

export const sidebarAnimations = {
  specials: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.2 },
    },
  },

  drinks: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.8, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.8 },
    },
  },

  fastFoods: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.6, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.6 },
    },
  },

  meatDishes: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.3 },
    },
  },

  pizzas: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.7 },
    },
  },

  soups: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.5 },
    },
  },

  vege: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.4, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.4 },
    },
  },

  location: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.9, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 0.9 },
    },
  },

  closeMenu: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 1, duration: 0.4 },
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.4, delay: 1 },
    },
  },
};

export const routeLayoutAnimations = {
  layout: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1 },
  },

  layoutProduct: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 1.2, duration: 0.8 },
  },
};

export const checkoutAnimations = {
  banner: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.2 },
  },

  customerInfo: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.4 },
  },

  paymentInfo: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.6 },
  },

  deliveryInfo: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.8 },
  },

  checkoutConfirm: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.6 },
  },

  total: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 0.8 },
  },

  buyButton: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, delay: 1.2 },
  },
};

export const locationAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.8, duration: 0.6 },
};

export const productDetailsAnimations = {
  productDetails: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { delay: 0.1, duration: 0.3 },
  },

  header: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.2, duration: 0.3 },
  },

  description: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.6, duration: 0.3 },
  },
};
