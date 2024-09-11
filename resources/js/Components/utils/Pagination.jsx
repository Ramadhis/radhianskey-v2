import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState, useRef } from "react";

const Pagination = ({ pagination }) => {
    const [url, setUrl] = useState(new URL(location)); //pagination
    const [href, setHref] = useState(null);
    const pagRef = useRef(null);
    // useEffect(() => {
    //     console.log(pagination);
    //     console.log(url);
    // }, []);

    //status = url
    //number = label
    const changePage = (number, status) => {
        if (status) {
            if (number == "&laquo; Previous" || number == "Next &raquo;") {
                let getPage = null;

                if (number == "&laquo; Previous") {
                    getPage = new URL(pagination[0].url);
                    url.searchParams.set(
                        "page",
                        getPage.searchParams.get("page")
                    );
                } else if (number == "Next &raquo;") {
                    getPage = new URL(pagination[pagination.length - 1].url);
                    url.searchParams.set(
                        "page",
                        getPage.searchParams.get("page")
                    );
                }
                // console.log(url);
            } else {
                url.searchParams.set("page", number);
            }

            pagRef.current.href = url.pathname + url.search;
            setHref(url.pathname + url.search);
            setTimeout(() => {
                pagRef.current.click();
            }, 500);
        } else {
            return;
        }
    };

    return (
        <>
            <nav className="mt-2">
                <ul className="pagination flex-wrap">
                    {/* <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">
                            Previous
                        </a>
                    </li> */}
                    <Link
                        ref={pagRef}
                        className="btn btn-success visually-hidden"
                        href={href}
                        method="get"
                    >
                        2
                    </Link>
                    {pagination.map((val, index) => {
                        return (
                            <li
                                className={`page-item
                                    ${val.active ? `active` : null}
                                    ${val.url ? null : `disabled`}
                                    `}
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    return changePage(val.label, val.url);
                                }}
                            >
                                <a
                                    className={`page-link ${
                                        val.url ? null : `disabled`
                                    }`}
                                    href="#"
                                >
                                    {val.label
                                        .replace(
                                            "&laquo; Previous",
                                            "Sebelumnya"
                                        )
                                        .replace("Next &raquo;", "Berikutnya")}
                                </a>
                            </li>
                        );
                    })}

                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li> */}
                    {/* <li className="page-item">
                        <a className="page-link" href="#">
                            Next
                        </a>
                    </li> */}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;
