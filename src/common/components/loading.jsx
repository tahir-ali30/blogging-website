import { useState, useEffect } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import nprogress from "nprogress";

function LoadingWidget () {
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => nprogress.start();
    const handleRouteChangeComplete = () => nprogress.done();

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, []);

//   return loading ? <div>Loading...</div> : null;
};

export default LoadingWidget;