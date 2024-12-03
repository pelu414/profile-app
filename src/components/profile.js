import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const profile = () => {
    return (
        <div>
            <>
                <section className="profile-banner">
                    <div className="overlay" />
                    <div className="content">
                        <h1>Profile</h1>
                        <div className="colorful-line" />
                        <nav className="breadcrumb-nav">
                            <ul className="breadcrumb">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>/</li>
                                <li className="active">Profile</li>
                            </ul>
                        </nav>
                        <div className="down-arrow">
                            <Link href="#profile-section">
                                <i className="fa-solid fa-angle-down" />
                            </Link>
                        </div>
                    </div>
                </section>
                <section id="profile-section" className="profile-section">
                    <div className="profile-grid">
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Akinwunmi Dawud</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <FontAwesomeIcon icon={faLink} className= "fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Tijani Ganiu Owolabi</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <FontAwesomeIcon icon={faLink} className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Asama Victor</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Akinwunmi Dawud</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Tijani Ganiu Owolabi</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Asama Victor</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Akinwunmi Dawud</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Tijani Ganiu Owolabi</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Asama Victor</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Akinwunmi Dawud</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Tijani Ganiu Owolabi</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Asama Victor</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Akinwunmi Dawud</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image" width={200} height={200} />
                            <div className="profile-details">
                                <h5>Tijani Ganiu Owolabi</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                        <div className="profile-card">
                            <Image src="/gravatar.jpeg" alt="Profile Image"  width={200} height={200}/>
                            <div className="profile-details">
                                <h5>Asama Victor</h5>
                                <div className="colorful-div" />
                                <p>Skills: Software Engineer</p>
                                <p>Batch: Batch A, December 2024</p>
                                <p>
                                    <Link
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </Link>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="pagination">
                        <Link href="#" id="prev" style={{ display: "none" }}>
                            Prev
                        </Link>
                        <Link href="#" className="page" data-page={1}>
                            1
                        </Link>
                        <Link href="#" className="page" data-page={2}>
                            2
                        </Link>
                        <Link href="#" className="page" data-page={3}>
                            3
                        </Link>
                        <Link href="#" className="page" data-page={4}>
                            4
                        </Link>
                        <Link href="#" className="page" data-page={5}>
                            5
                        </Link>
                        <Link href="#" className="page" data-page={6}>
                            6
                        </Link>
                        <Link href="#" id="next">
                            Next
                        </Link>
                    </div>
                </section>
            </>

        </div>
    )
}

export default profile