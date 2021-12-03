import { useEffect, useState } from "react";

const url =
  "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
export default function useData() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        localStorage.setItem("spaces", JSON.stringify(res));
      });
  }, []);

  return [data];
}
