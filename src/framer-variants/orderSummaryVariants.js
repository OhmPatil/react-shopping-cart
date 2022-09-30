const orderSummaryVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.1,
    },
  },

  hoverend: {
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
  click: {
    scale: 0.85,
    transition: {
      duration: 0.2,
    },
  },
};

export default orderSummaryVariants;
