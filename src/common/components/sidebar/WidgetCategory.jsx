import Link from "next/link";
import Image from "next/image";
import { removeDuplicates, slugify, titleFormat } from "../../utils";

const WidgetCategory = ({ catData }) => {

  const uniqueCategory = removeDuplicates(catData, "cate");

  return (
    <div className="axil-single-widget widget widget_categories mb--30">
      <ul>
        {uniqueCategory.slice(0, 4).map((data) => (
          <li className="cat-item" key={data.slug}>
            <Link href={`/category/${slugify(data.cate)}`}>
              <a className="inner">
                <div className="thumbnail">
                  <Image
                    src={data?.cate_img ? data?.cate_img : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII='}
                    alt={data.cate}
                    height={50}
                    width={50}
                    priority={true}
                  />
                </div>
                <div className="content">
                  <h5 className="title">{titleFormat(data.cate)}</h5>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetCategory;
