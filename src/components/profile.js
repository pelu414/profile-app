import Image from "next/image";
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
                                    <a href="/">Home</a>
                                </li>
                                <li>/</li>
                                <li className="active">Profile</li>
                            </ul>
                        </nav>
                        <div className="down-arrow">
                            <a href="#profile-section">
                                <i className="fa-solid fa-angle-down" />
                            </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <FontAwesomeIcon icon={faLink} className= "fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <FontAwesomeIcon icon={faLink} className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
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
                                    <a
                                        href="https://gee-flash.github.io/OnePageWebsite/"
                                        target="_blank"
                                    >
                                        Portfolio URL Link
                                        <i className="fa-solid fa-link" />
                                    </a>
                                </p>
                                <p>Gender: Male</p>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="pagination">
                        <a href="#" id="prev" style={{ display: "none" }}>
                            Prev
                        </a>
                        <a href="#" className="page" data-page={1}>
                            1
                        </a>
                        <a href="#" className="page" data-page={2}>
                            2
                        </a>
                        <a href="#" className="page" data-page={3}>
                            3
                        </a>
                        <a href="#" className="page" data-page={4}>
                            4
                        </a>
                        <a href="#" className="page" data-page={5}>
                            5
                        </a>
                        <a href="#" className="page" data-page={6}>
                            6
                        </a>
                        <a href="#" id="next">
                            Next
                        </a>
                    </div>
                </section>
            </>

        </div>
    )
}

export default profile