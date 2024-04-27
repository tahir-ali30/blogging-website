import { useState, useEffect } from "react";
import Router from "next/router";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

function LoadingWidget () {
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => toast.loading('Loading');
    const handleRouteChangeComplete = () => toast.dismiss();

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