import Image from "next/image";

const WidgetAd = ({url, image, height, width}) => {
  return (
    <div className="axil-single-widget widget widget_ads mb--30">
      <div className="thumbnail">
        <a href={url}>
            <Image
            src={image ? image : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII='}
            alt="Ads Image"
            height={height}
            width={width}
            priority={true}
            />
        </a>
      </div>
    </div>
  );
};

export default WidgetAd;
