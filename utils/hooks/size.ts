import { useState, useEffect } from "react";

export function useMediaQuery(query: any) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", listener);
    } else {
      media.addListener(listener);
    }

    return () => {
      if (typeof media.removeEventListener === "function") {
        media.removeEventListener("change", listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [matches, query]);

  return matches;
}

export function useSize() {
  const [size, setSize] = useState([0, 0]);
  const [category, setCategory] = useState("all");
// update the window size when the client is loaded
  useEffect(() => {
    if (!(window.innerWidth === size[0] && window.innerHeight === size[1]) )
    updateSize();


    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);

    if (size[0] > 1536)
      setCategory("2xl");
    else if (size[0] > 1280)
      setCategory("xl");
    else if (size[0] > 1024)
      setCategory("lg");
    else if (size[0] > 768)
      setCategory("md");
    else
      setCategory("sm");


    return () => window.removeEventListener('resize', updateSize);
  }, [size]);




  return { size, category };
}
