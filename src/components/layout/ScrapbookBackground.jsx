// One scrapbook sheet pinned behind the whole site; every section scrolls over it.
// It never shrinks below its designed width, so narrower screens crop the outer edges
// symmetrically instead of squeezing the artwork.
const ScrapbookBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 bg-paper bg-[url(/decor/scrapbook-bg.jpg)] bg-center bg-no-repeat bg-[length:max(1920px,100vw,calc(100dvh*16/9))_auto]"
    />
  );
};

export default ScrapbookBackground;
