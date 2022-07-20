import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "marukeso",
  description: "This is marukeso's blog.",
  avatar: "https://avatars.githubusercontent.com/u/5692384?v=4",
  avatarClass: "rounded-full",
  author: "marukeso",
  links: [
    { title: "Email", url: "mailto:marukeso@gmail.com" },
    { title: "GitHub", url: "https://github.com/marukeso" },
  ],
  lang: "ja",
  // dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  // middlewares: [
  //   ga("UA-XXXXXXXX-X"),
  //   redirects({
  //     "/foo": "/my_post",
  //     // you can skip leading slashes too
  //     "bar": "my_post2",
  //   }),
  // ],
  // unocss: unocss_opts, // check https://github.com/unocss/unocss
  favicon: "favicon.ico",
});
