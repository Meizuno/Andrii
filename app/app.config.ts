export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
    navigationMenu: {
      slots: {
        linkLabel: "hidden sm:block truncate md:text-lg",
        linkLeadingIcon: "shrink-0 size-8",
        link: "flex-col gap-1 md:gap-2 md:flex-row",
      },
    },
    separator: {
      slots: {
        root: "py-2",
      },
    },
    card: {
      slots: {
        root: "hover:scale-105 transition duration-300",
        header: "sm:p-4",
        body: "sm:p-4",
        footer: "sm:p-4",
      },
    },
  },
});
