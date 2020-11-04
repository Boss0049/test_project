module.exports = {
  async rewrites() {
    return [
      {
        source: "/team",
        destination: "/about",
      },
      {
        source: "/world",
        destination: "/test/world",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/NotFound",
        permanent: true,
      },
      {
        source: "/test/world",
        destination: "/NotFound",
        permanent: true,
      },
    ];
  },
  //   exportPathMap: function () {
  //     return {
  //       "/": { page: "/" },
  //       "/blogs/1": { page: "/about" },
  //       "/blogs/2": { page: "/hello" },
  //     };
  //   },
  devIndicators: {
    autoPrerender: false,
  },
};
