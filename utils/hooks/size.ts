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

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    if (size[0] > 1536)
      setCategory("2xl");
    else if (size[0] > 1280)
      setCategory("xl");
    else if (size[0] > 1024)
      setCategory("lg");
    else if (size[0] > 768)
      setCategory("md");
    else if (size[0] > 640)
      setCategory("sm");
    else
      setCategory("all")

    return () => window.removeEventListener('resize', updateSize);
  }, []);


  return { size, category };
}
