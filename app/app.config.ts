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
  },
});
