export const GlobalCss = {
  body: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundColor: '#cc3838',
  },

  '.animatedFadeOut': {
    animation: 'fadeOut 1.5s ease-out',
    animationDelay: '2s',

    '@keyframes fadeOut': {
      from: {
        opacity: 1,
      },
      to: {
        opacity: 0,
      },
    },
  },

  '.animatedFadeIn': {
    animation: 'fadeIn 0.5s ease-in',

    '@keyframes fadeIn': {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  },
};
