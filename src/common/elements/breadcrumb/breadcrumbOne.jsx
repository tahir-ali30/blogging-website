import Image from "next/image";

const BreadcrumbOne = ({title, image, description}) => {
    return (
        <div className="axil-breadcrumb-area breadcrumb-style-1 bg-color-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner">
                            {image && <Image src={image} width={300} height={300} alt={title} />}
                            <h1 className="page-title">{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbOne;