import React from "react";

export function useIsMounted(): () => boolean {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return React.useCallback(() => isMounted.current, []);
}
