import { useEffect } from "react";

function useTitle(title) {
  useEffect(
    function () {
      document.title = `${title} | E-book`;
    },
    [title]
  );

  return null;
}

export default useTitle;
